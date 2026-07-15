"use client";
import { useEffect, useRef } from "react";

type Star = {
	x: number; // 0..1 relative position
	y: number;
	z: number; // depth 0.25..1 — drives size, speed, parallax and brightness
	r: number; // base radius in px
	phase: number;
	twinkleSpeed: number;
	accent: boolean;
};

// Travel speed in normalized viewport-widths per second, scaled by depth
// so near stars stream past faster than distant ones.
const BASE_DRIFT = 0.012;
const DEPTH_DRIFT = 0.035;

type ShootingStar = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	life: number; // remaining ms
	maxLife: number;
};

const STAR_DENSITY = 1 / 3800; // stars per px²
const MAX_STARS = 520;
const CHARCOAL = "65, 56, 37"; // matches --foreground
const ACCENT = "231, 59, 36"; // matches --primary

function makeStars(width: number, height: number): Star[] {
	const count = Math.min(MAX_STARS, Math.round(width * height * STAR_DENSITY));
	return Array.from({ length: count }, () => {
		const z = 0.25 + Math.random() * 0.75;
		return {
			x: Math.random(),
			y: Math.random(),
			z,
			r: (0.6 + Math.random() * 1.3) * z,
			phase: Math.random() * Math.PI * 2,
			twinkleSpeed: 0.4 + Math.random() * 1.1,
			accent: Math.random() < 0.07,
		};
	});
}

// Pre-rendered glow sprite — much cheaper than per-star shadowBlur.
function makeGlowSprite(rgb: string): HTMLCanvasElement {
	const size = 64;
	const sprite = document.createElement("canvas");
	sprite.width = size;
	sprite.height = size;
	const ctx = sprite.getContext("2d")!;
	const gradient = ctx.createRadialGradient(
		size / 2,
		size / 2,
		0,
		size / 2,
		size / 2,
		size / 2,
	);
	gradient.addColorStop(0, `rgba(${rgb}, 0.9)`);
	gradient.addColorStop(0.25, `rgba(${rgb}, 0.35)`);
	gradient.addColorStop(1, `rgba(${rgb}, 0)`);
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, size, size);
	return sprite;
}

const Starfield = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: true });
		if (!ctx) return;

		const reducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let width = 0;
		let height = 0;
		let dpr = 1;
		let stars: Star[] = [];
		let shooting: ShootingStar[] = [];
		let frameId = 0;
		let running = false;
		let visible = true;
		let inView = true;
		let lastTime = 0;
		let elapsed = 0;
		let nextShootingIn = 1800 + Math.random() * 2600;

		// Pointer parallax — lerped so movement feels weighty, not jittery.
		let targetPx = 0;
		let targetPy = 0;
		let px = 0;
		let py = 0;

		const charcoalGlow = makeGlowSprite(CHARCOAL);
		const accentGlow = makeGlowSprite(ACCENT);

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			stars = makeStars(width, height);
			if (reducedMotion) drawFrame(0);
		};

		// Vignette so stars stay quiet behind the hero copy and page edges.
		const edgeFade = (x: number, y: number): number => {
			const nx = (x / width) * 2 - 1;
			const ny = (y / height) * 2 - 1;
			const d = Math.sqrt(nx * nx + ny * ny);
			return Math.max(0, Math.min(1, 1.15 - d * 0.55));
		};

		const spawnShootingStar = () => {
			const fromLeft = Math.random() < 0.5;
			const speed = 0.55 + Math.random() * 0.35; // px per ms
			const angle = (18 + Math.random() * 14) * (Math.PI / 180);
			shooting.push({
				x: fromLeft ? -40 : width * (0.3 + Math.random() * 0.6),
				y: height * (0.05 + Math.random() * 0.35),
				vx: Math.cos(angle) * speed * (fromLeft ? 1 : 1),
				vy: Math.sin(angle) * speed,
				life: 900,
				maxLife: 900,
			});
		};

		const drawFrame = (dt: number) => {
			elapsed += dt;
			ctx.clearRect(0, 0, width, height);

			px += (targetPx - px) * 0.05;
			py += (targetPy - py) * 0.05;

			const t = elapsed / 1000;
			const drift = dt / 1000;
			for (const star of stars) {
				// Constant leftward travel — the whole field streams past like
				// scenery outside a moving vehicle.
				star.x -= (BASE_DRIFT + DEPTH_DRIFT * star.z) * drift;
				if (star.x < -0.02) {
					star.x += 1.04;
					star.y = Math.random();
				}

				const twinkle =
					0.55 + 0.45 * Math.sin(t * star.twinkleSpeed + star.phase);
				const sx = star.x * width + px * 18 * star.z;
				const sy = star.y * height + py * 12 * star.z;
				const alpha =
					(star.accent ? 0.9 : 0.72) *
					star.z *
					twinkle *
					edgeFade(sx, sy);
				if (alpha <= 0.01) continue;

				const sprite = star.accent ? accentGlow : charcoalGlow;
				const drawSize = star.r * 7;
				ctx.globalAlpha = alpha;
				ctx.drawImage(
					sprite,
					sx - drawSize / 2,
					sy - drawSize / 2,
					drawSize,
					drawSize,
				);
			}
			ctx.globalAlpha = 1;

			if (!reducedMotion) {
				nextShootingIn -= dt;
				if (nextShootingIn <= 0 && shooting.length < 3) {
					spawnShootingStar();
					nextShootingIn = 1500 + Math.random() * 2800;
				}

				shooting = shooting.filter((s) => s.life > 0);
				for (const s of shooting) {
					s.x += s.vx * dt;
					s.y += s.vy * dt;
					s.life -= dt;
					const progress = s.life / s.maxLife;
					const tailX = s.x - s.vx * 130;
					const tailY = s.y - s.vy * 130;
					const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
					gradient.addColorStop(0, `rgba(${ACCENT}, ${0.85 * progress})`);
					gradient.addColorStop(1, `rgba(${ACCENT}, 0)`);
					ctx.strokeStyle = gradient;
					ctx.lineWidth = 1.6;
					ctx.lineCap = "round";
					ctx.beginPath();
					ctx.moveTo(s.x, s.y);
					ctx.lineTo(tailX, tailY);
					ctx.stroke();

					ctx.globalAlpha = 0.9 * progress;
					ctx.drawImage(accentGlow, s.x - 6, s.y - 6, 12, 12);
					ctx.globalAlpha = 1;
				}
			}
		};

		const tick = (time: number) => {
			if (!running) return;
			const dt = lastTime ? Math.min(time - lastTime, 64) : 16;
			lastTime = time;
			drawFrame(dt);
			frameId = requestAnimationFrame(tick);
		};

		const syncRunning = () => {
			const shouldRun = visible && inView && !reducedMotion;
			if (shouldRun && !running) {
				running = true;
				lastTime = 0;
				frameId = requestAnimationFrame(tick);
			} else if (!shouldRun && running) {
				running = false;
				cancelAnimationFrame(frameId);
			}
		};

		const onPointerMove = (event: PointerEvent) => {
			targetPx = (event.clientX / window.innerWidth) * 2 - 1;
			targetPy = (event.clientY / window.innerHeight) * 2 - 1;
		};

		const onVisibility = () => {
			visible = document.visibilityState === "visible";
			syncRunning();
		};

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(canvas);
		const intersectionObserver = new IntersectionObserver(
			([entry]) => {
				inView = entry.isIntersecting;
				syncRunning();
			},
			{ threshold: 0 },
		);
		intersectionObserver.observe(canvas);

		resize();
		syncRunning();
		document.addEventListener("visibilitychange", onVisibility);
		if (!reducedMotion) {
			window.addEventListener("pointermove", onPointerMove, { passive: true });
		}

		return () => {
			running = false;
			cancelAnimationFrame(frameId);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			document.removeEventListener("visibilitychange", onVisibility);
			window.removeEventListener("pointermove", onPointerMove);
		};
	}, []);

	return (
		<div className="pointer-events-none size-full overflow-hidden select-none">
			<canvas ref={canvasRef} className="size-full" aria-hidden="true" />
		</div>
	);
};

export default Starfield;
