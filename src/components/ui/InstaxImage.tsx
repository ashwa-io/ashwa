import { cn } from "@/lib/utils"
import Image from "next/image"

export function InstaxImage({
  className,
  src,
  width,
  height,
  alt,
  caption,
  sizes,
}: {
  className?: string
  src: string
  width: number
  height: number
  alt: string
  caption: string
  sizes?: string
}) {
  return (
    <figure
      className={cn(
        "h-fit max-w-full overflow-hidden rounded-lg bg-white shadow-xl shadow-black/10 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-black/20 dark:bg-gray-900 dark:shadow-indigo-500/5 dark:ring-white/20 dark:hover:shadow-indigo-900/20",
        className,
      )}
    >
      <div className="w-full bg-gray-50 p-2 dark:bg-gray-900">
        <div className="relative w-full overflow-hidden rounded">
          <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className="h-auto w-full max-w-full"
          />
        </div>
      </div>
      <div className="px-2 pt-2 pb-2 font-handwriting text-xl text-gray-700 dark:text-gray-300">
        <figcaption className="text-center">{caption}</figcaption>
      </div>
    </figure>
  )
}
