const schemes = [
  {
    title: "Scholarship Scheme",
    desc: "Meritorious students can avail up to 50% scholarship based on their academic performance in our entrance test.",
    icon: "fas fa-award",
    benefits: ["Up to 50% fee waiver", "Based on entrance test", "Renewable every year", "Open to all standards"],
    highlight: true,
  },
  {
    title: "Early Admission Offer",
    desc: "Students who register before the academic session begins get special discounts on tuition fees.",
    icon: "fas fa-clock",
    benefits: ["15% early bird discount", "Priority batch selection", "Free study material", "Valid for new admissions"],
    highlight: false,
  },
  {
    title: "Referral Program",
    desc: "Refer a friend and both you and your friend get exciting benefits and fee discounts.",
    icon: "fas fa-user-plus",
    benefits: ["10% discount for referrer", "10% discount for referee", "No limit on referrals", "Instant reward"],
    highlight: false,
  },
  {
    title: "Merit Based Discount",
    desc: "Students scoring above 90% in their school exams are eligible for special merit-based discounts.",
    icon: "fas fa-trophy",
    benefits: ["20% merit discount", "Based on school results", "Applicable every term", "Certificate of merit"],
    highlight: true,
  },
];

const Schemes = () => (
  <div>
    <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
      <h1 className="font-heading text-4xl font-extrabold md:text-5xl">Our Schemes</h1>
      <p className="mt-3 text-primary-foreground/70">Making quality education affordable for everyone</p>
    </section>

    <section className="section-padding bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {schemes.map((s) => (
          <div key={s.title} className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${s.highlight ? "border-primary/30 bg-primary/5 card-shadow-hover" : "bg-card card-shadow hover:card-shadow-hover"}`}>
            {s.highlight && (
              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </div>
            )}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground">
              <i className={s.icon}></i>
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>
            <ul className="mt-5 space-y-3">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <i className="fas fa-check text-primary text-xs"></i> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Schemes;
