export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Powering growing membership businesses
          </h2>
          <p>
            From small studios to global communities, our platform helps
            thousands of businesses streamline billing, automate renewals,
            and keep members engaged.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">$45M+</div>
            <p>Revenue processed</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">98%</div>
            <p>Member retention rate</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">3,200+</div>
            <p>Businesses onboarded</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  