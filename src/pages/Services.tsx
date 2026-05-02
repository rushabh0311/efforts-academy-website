const services = [
  {
    title: "1st – 4th Standard Coaching",
<<<<<<< HEAD
    desc: "Building a strong foundation in Mathematics, English, Science and Languages through activity-based learning and interactive sessions.",
=======
    desc: "Building a strong foundation in Mathematics, English, Science, and Languages through activity-based learning and interactive sessions.",
>>>>>>> 140539846852a624afa49c224564faebe1419ed4
    icon: "fas fa-seedling",
    features: ["Activity-based learning", "Phonics & reading skills", "Basic math concepts", "Creative worksheets"],
  },
  {
    title: "5th – 7th Standard Coaching",
    desc: "Concept-driven teaching with focus on analytical thinking, problem-solving and preparation for competitive exams.",
    icon: "fas fa-book-open",
    features: ["Conceptual understanding", "Problem-solving skills", "Science experiments", "English communication"],
  },
  {
    title: "8th – 10th Standard Coaching",
    desc: "Intensive board exam preparation with regular mock tests, revision sessions, and one-on-one doubt clearing.",
    icon: "fas fa-graduation-cap",
<<<<<<< HEAD
    features: ["Board exam preparation", "Mock test series", " Analysis of previous year's question papers", "Career guidance"],
=======
    features: ["Board exam preparation", "Mock test series", "Previous year analysis", "Career guidance"],
>>>>>>> 140539846852a624afa49c224564faebe1419ed4
  },
  {
    title: "Doubt Solving Sessions",
    desc: "Dedicated sessions where students can get their doubts cleared by subject experts in a comfortable environment.",
    icon: "fas fa-question-circle",
    features: ["One-on-one sessions", "Subject experts", "Flexible timings", "No extra charge"],
  },
  {
    title: "Weekly Test Series",
    desc: "Regular assessments to track progress, identify weak areas, and build exam confidence through practice.",
    icon: "fas fa-clipboard-check",
<<<<<<< HEAD
    features: ["Chapter-wise tests", "Performance analysis", "Rank system", " Reports and feedback to parents"],
=======
    features: ["Chapter-wise tests", "Performance analysis", "Rank system", "Parent reports"],
>>>>>>> 140539846852a624afa49c224564faebe1419ed4
  },
];

const Services = () => (
  <div>
    <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
      <h1 className="font-heading text-4xl font-extrabold md:text-5xl">Our Services</h1>
      <p className="mt-3 text-primary-foreground/70">Comprehensive coaching for every student's needs</p>
    </section>

    <section className="section-padding bg-background">
      <div className="mx-auto max-w-6xl space-y-8">
        {services.map((s, i) => (
          <div key={s.title} className={`grid gap-8 rounded-2xl border bg-card p-8 card-shadow lg:grid-cols-[1fr_2fr] ${i % 2 !== 0 ? "lg:grid-cols-[2fr_1fr]" : ""}`}>
            <div className={`flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground">
                <i className={s.icon}></i>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
            <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <div className="grid gap-3 sm:grid-cols-2">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 rounded-xl bg-primary/5 p-4">
                    <i className="fas fa-check-circle text-primary"></i>
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
