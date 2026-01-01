"use client"
import createGlobe from "cobe"
import { FunctionComponent, useEffect, useRef } from "react"

export const GlobalDatabase: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 4.7

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: -0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 13,
      mapBaseBrightness: 0.05,
      baseColor: [0.3, 0.3, 0.3],
      glowColor: [0.15, 0.15, 0.15],
      markerColor: [100, 100, 100],
      markers: [
        { location: [28.7041, 77.1025], size: 0.04 }, // Delhi
        { location: [19.0760, 72.8777], size: 0.04 }, // Mumbai
        { location: [12.9716, 77.5946], size: 0.04 }, // Bangalore
        { location: [13.0827, 80.2707], size: 0.04 }, // Chennai
        { location: [22.5726, 88.3639], size: 0.04 }, // Kolkata
        { location: [17.3850, 78.4867], size: 0.04 }, // Hyderabad
        { location: [18.5204, 73.8567], size: 0.04 }, // Pune
        { location: [23.0225, 72.5714], size: 0.04 }, // Ahmedabad
        { location: [26.9124, 75.7873], size: 0.04 }, // Jaipur
        { location: [21.1702, 72.8311], size: 0.04 }, // Surat
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi
        phi += 0.0008
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  const features = [
    {
      name: "Real-Time Tracking",
      description: "Monitor fleet locations with precise GPS data and instant updates.",
    },
    {
      name: "Global Coverage",
      description: "Track vehicles across cities and regions with seamless connectivity.",
    },
    {
      name: "Smart Alerts",
      description: "Get instant notifications for violations, speed limits, and route deviations.",
    },
  ]

  return (
    <div className="px-3">
      <section
        aria-labelledby="global-database-title"
        className="relative mx-auto mt-28 flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-950 pt-24 shadow-xl shadow-black/30 md:mt-40"
      >
        <div className="absolute top-68 size-160 rounded-full bg-indigo-800 blur-3xl md:top-80" />
        <div className="z-10 inline-block rounded-lg border border-indigo-400/20 bg-indigo-800/20 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tight sm:text-sm">
          <span className="bg-linear-to-b from-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Global tracking
          </span>
        </div>
        <h2
          id="global-database-title"
          className="z-10 mt-6 inline-block bg-linear-to-b from-white to-indigo-100 bg-clip-text px-2 text-center text-5xl font-bold tracking-tighter text-transparent md:text-8xl"
        >
          Fleet intelligence <br /> platform
        </h2>
        <canvas
          className="absolute top-[7.1rem] z-20 aspect-square size-full max-w-fit md:top-48"
          ref={canvasRef}
          style={{ width: 1200, height: 1200 }}
        />
        <div className="z-20 -mt-32 h-144 w-full overflow-hidden md:-mt-36">
          <div className="absolute bottom-0 h-3/5 w-full bg-linear-to-b from-transparent via-gray-950/95 to-gray-950" />
          <div className="absolute inset-x-6 bottom-12 m-auto max-w-4xl md:top-2/3">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border border-white/3 bg-white/1 px-6 py-6 shadow-xl backdrop-blur md:grid-cols-3 md:p-8">
              {features.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <h3 className="whitespace-nowrap bg-linear-to-b from-indigo-300 to-indigo-500 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-indigo-200/40">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
