import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt">;

export const Logo = ({ className, width = 120, height = 146, ...props }: LogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt="Ashwa Logo"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
      unoptimized={false}
      {...props}
    />
  );
};

type LogoWithTextProps = {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
};

export const LogoWithText = ({ className, logoClassName, textClassName }: LogoWithTextProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo
        width={39}
        height={48}
        className={cn("h-12 w-auto -mt-2", logoClassName)}
      />
      <span
        className={cn(
          "uppercase text-current text-5xl font-bebas-neue",
          textClassName
        )}
        style={{ fontFamily: "var(--font-bebas-neue)" }}
      >
        ASHWA
      </span>
    </div>
  );
};

type LogoTextProps = {
  className?: string;
};

export const LogoText = ({ className }: LogoTextProps) => {
  return (
    <div
      className={cn(
        "uppercase text-current text-2xl md:text-3xl",
        className
      )}
      style={{ fontFamily: "var(--font-bebas-neue)" }}
      aria-label="Ashwa Logo"
    >
      ASHWA
    </div>
  );
};
