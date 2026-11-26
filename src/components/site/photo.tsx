import Image from "next/image";

import type { Photo as PhotoData } from "@/content/photos";
import { cn } from "@/lib/utils";

/** A framed photograph. The image zooms slightly inside its frame on hover. */
export function Photo({
  photo,
  className,
  sizes = "(min-width: 1320px) 1224px, 100vw",
  priority,
}: {
  photo: PhotoData;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("group relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={85}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
