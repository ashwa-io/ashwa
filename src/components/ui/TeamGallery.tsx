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
            className="w-[85%] max-w-[20rem] -rotate-6 md:w-[25rem] md:-ml-10"
            src="/images/working.webp"
            alt="Two employees working with computers"
            width={640}
            height={427}
            caption="At Database we use computers"
          />
          <InstaxImage
            className="w-[70%] max-w-[15rem] rotate-3 md:w-[15rem]"
            src="/images/workplace.webp"
            alt="Office with a phone booth"
            width={640}
            height={853}
            caption="Our phone booths are nuts"
          />
          <InstaxImage
            className="w-[70%] max-w-[15rem] rotate-1 md:w-[15rem] md:-mr-10"
            src="/images/home.webp"
            alt="Picture of the Fraumunster Zurich"
            width={640}
            height={960}
            caption="Home sweet home"
          />
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
          <InstaxImage
            className="w-[85%] max-w-[20rem] rotate-1 md:-ml-16 md:w-[25rem]"
            src="/images/break.webp"
            alt="Team having a break in the lunch room"
            width={640}
            height={360}
            caption="Sometimes we take a break"
          />
          <InstaxImage
            className="w-[70%] max-w-[15rem] -rotate-3 md:-mt-10 md:w-[15rem]"
            src="/images/cool.webp"
            alt="Personw with headphones"
            width={640}
            height={965}
            caption="Robin handels the playlist"
          />
          <InstaxImage
            className="w-[90%] max-w-[25rem] rotate-[8deg] md:-mr-20 md:-mt-2 md:w-[30rem]"
            src="/images/release.webp"
            alt="Picture of a party with confetti"
            width={1920}
            height={1281}
            caption="v1.0 Release party. Our US intern, Mike, had his first alcohol-free beer"
          />
        </div>
      </div>
      <div className="mt-28 w-full">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <InstaxImage
            className="w-full max-w-full rotate-1 md:w-full md:max-w-2xl"
            src="/images/founders.webp"
            alt=" Join Database, be yourself."
            width={1819}
            height={998}
            caption=" Join Database, be yourself."
          />
        </div>
      </div>
    </section>
  )
}
