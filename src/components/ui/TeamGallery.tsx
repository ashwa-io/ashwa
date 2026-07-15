import { InstaxImage } from "./InstaxImage"

export default function TeamGallery() {
  return (
    <section
      aria-labelledby="teamwork-title"
      className="mx-auto mt-5 w-full max-w-4xl animate-slide-up-fade px-2"
      style={{
        animationDuration: "600ms",
        animationDelay: "200ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="mt-20">
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
          <InstaxImage
            className="w-[85%] max-w-[20rem] -rotate-6 md:w-100 md:-ml-10"
            src="/images/working.webp"
            alt="Two engineers working at their desks in the Ashwa office"
            width={640}
            height={427}
            sizes="(min-width: 768px) 400px, 85vw"
            caption="Shipping the live map at 2 AM"
          />
          <InstaxImage
            className="w-[70%] max-w-60 rotate-3 md:w-60"
            src="/images/workplace.webp"
            alt="A workspace desk at the Ashwa office in Raipur"
            width={640}
            height={853}
            sizes="(min-width: 768px) 240px, 70vw"
            caption="Where the tracking magic happens"
          />
          <InstaxImage
            className="w-[70%] max-w-60 rotate-1 md:w-60 md:-mr-10"
            src="/images/home.webp"
            alt="View of the city around the Ashwa office"
            width={640}
            height={960}
            sizes="(min-width: 768px) 240px, 70vw"
            caption="Home sweet Raipur"
          />
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
          <InstaxImage
            className="w-[85%] max-w-[20rem] rotate-1 md:-ml-16 md:w-100"
            src="/images/break.webp"
            alt="Chai break at the Ashwa office"
            width={640}
            height={360}
            sizes="(min-width: 768px) 400px, 85vw"
            caption="Chai break = unofficial roadmap meeting"
          />
          <InstaxImage
            className="w-[70%] max-w-60 -rotate-3 md:-mt-10 md:w-60"
            src="/images/cool.webp"
            alt="Team member with headphones focused at their desk"
            width={640}
            height={965}
            sizes="(min-width: 768px) 240px, 70vw"
            caption="Deep-work mode: headphones on"
          />
          <InstaxImage
            className="w-[90%] max-w-100 rotate-[8deg] md:-mr-20 md:-mt-2 md:w-[30rem]"
            src="/images/release.webp"
            alt="The Ashwa team celebrating a launch milestone"
            width={1920}
            height={1281}
            sizes="(min-width: 768px) 480px, 90vw"
            caption="The night we crossed 10,000 tracked vehicles"
          />
        </div>
      </div>
      <div className="mt-28 w-full">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <InstaxImage
            className="w-full max-w-full rotate-1 md:w-full md:max-w-2xl"
            src="/images/founders.webp"
            alt="The Ashwa team at the office"
            width={1819}
            height={998}
            sizes="(min-width: 768px) 672px, 100vw"
            caption="Building Ashwa — one fleet at a time"
          />
        </div>
      </div>
    </section>
  )
}
