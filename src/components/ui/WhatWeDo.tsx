const whatWeDo = [
  {
    title: "Real-time Tracking",
    description:
      "Monitor your entire fleet with precision using our advanced GPS tracking technology that provides instant location updates.",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Leverage artificial intelligence to gain insights into fleet performance, optimize routes, and predict maintenance needs.",
  },
  {
    title: "Fleet Optimization",
    description:
      "Reduce operational costs and improve efficiency with data-driven recommendations for route planning and resource allocation.",
  },
  {
    title: "Safety & Compliance",
    description:
      "Ensure driver safety and regulatory compliance with automated monitoring, alerts, and comprehensive reporting tools.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our platform grows with your business, from small fleets to enterprise-level operations with thousands of vehicles.",
  },
  {
    title: "24/7 Support",
    description:
      "Get round-the-clock assistance from our dedicated support team to keep your fleet operations running smoothly.",
  },
  {
    title: "Custom Integrations",
    description:
      "Seamlessly integrate with your existing systems and workflows through our flexible API and integration capabilities.",
  },
  {
    title: "Data Security",
    description:
      "Your fleet data is protected with enterprise-grade security measures and compliance with industry standards.",
  },
]

export default function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-title" className="mx-auto mt-44">
      <h2
        id="what-we-do-title"
        className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
      >
        What We Do
      </h2>
      <dl className="mt-8 grid grid-cols-4 gap-x-10 gap-y-8 sm:mt-12 sm:gap-y-10">
        {whatWeDo.map((item, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
            <dt className="font-semibold text-gray-900 dark:text-gray-50">
              {item.title}
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

