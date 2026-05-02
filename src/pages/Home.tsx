import { Link } from "react-router-dom";

const courses = [
  { title: "1st – 4th Standard", desc: "Strong foundation in core subjects with activity based learning methods.", icon: "fas fa-seedling" },
  { title: "5th – 7th Standard", desc: "Concept-driven teaching to prepare for higher studies.", icon: "fas fa-book-open" },
  { title: "8th – 10th Standard", desc: "Board exam preparation with practice tests and mentoring.", icon: "fas fa-graduation-cap" },
];

const whyUs = [
  { title: "Expert Faculty", desc: "Highly qualified and experienced teachers dedicated to academic improvement of students leading to greater success.", icon: "fas fa-chalkboard-teacher" },
  { title: "Small Batches", desc: "Personal attention with limited students per batch.", icon: "fas fa-users" },
  { title: "Regular Tests", desc: "Weekly tests and progress tracking for continuous improvement.", icon: "fas fa-clipboard-check" },
  { title: "Affordable Fees", desc: "Quality education accessible to all with flexible payment options.", icon: "fas fa-hand-holding-heart" },
];

const testimonials = [
  { name: "Priya Sharma", text: "My daughter's grades improved significantly after joining Efforts Academy. The teachers are very supportive!", std: "Parent of 7th Std Student" },
  { name: "Rahul Patil", text: "The weekly test series really helped me prepare for my board exams. I scored 95%!", std: "10th Std Student" },
  { name: "Anita Desai", text: "Excellent coaching institute with a personal touch. Highly recommended for all parents.", std: "Parent of 4th Std Student" },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient relative overflow-hidden px-4 py-24 text-center text-primary-foreground md:py-36">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl animate-fade-in-up">
          Efforts Academy
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl" style={{ animationDelay: "0.2s", animation: "fade-in-up 0.6s ease-out 0.2s forwards", opacity: 0 }}>
          "Building Strong Foundations for Bright Futures"
        </p>
        <Link
          to="/register"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 font-heading font-semibold text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ animationDelay: "0.4s", animation: "fade-in-up 0.6s ease-out 0.4s forwards", opacity: 0 }}
        >
          Register Now <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Why Choose <span className="text-gradient">Us</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          We provide a nurturing environment where every student can excel.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.title} className="group rounded-2xl border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <i className={`${item.icon} text-xl`}></i>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Courses */}
    <section className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-gradient">Courses</span>
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="group rounded-2xl border bg-card p-8 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-2xl">
                <i className={c.icon}></i>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent">
                Learn more <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Student <span className="text-gradient">Testimonials</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border bg-card p-6 card-shadow">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-sm"></i>)}
              </div>
              <p className="text-muted-foreground italic">"{t.text}"</p>
              <div className="mt-4 border-t pt-4">
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.std}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Contact */}
    <section className="hero-gradient section-padding text-primary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
        <p className="mt-3 text-primary-foreground/70">Contact us today and give your child the best education they deserve.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/register" className="rounded-full bg-secondary px-8 py-3 font-heading font-semibold text-secondary-foreground transition-all hover:scale-105">
            Register Now
          </Link>
          <Link to="/contact" className="rounded-full border-2 border-primary-foreground/30 px-8 py-3 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
