const About = () => (
  <div>
    {/* Banner */}
    <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
      <h1 className="font-heading text-4xl font-extrabold md:text-5xl">About Us</h1>
      <p className="mt-3 text-primary-foreground/70">Learn more about our journey, mission and values</p>
    </section>

    {/* Introduction */}
    <section className="section-padding bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground">Welcome to <span className="text-gradient">Efforts Academy</span></h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Efforts Academy is a premier coaching institute dedicated to nurturing young minds from 1st to 10th standard. 
            Founded with a passion for quality education, we have been helping students build strong academic foundations 
            and develop critical thinking skills that last a lifetime.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our experienced faculty members use innovative teaching methods to make learning engaging, interactive 
            and effective. We believe every child has the potential to excel and we provide the right environment 
            and guidance to unlock that potential.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl card-shadow">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
            alt="Students in classroom"
            className="h-full w-full object-cover zoom-hover"
          />
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1 overflow-hidden rounded-2xl card-shadow">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
            alt="Learning environment"
            className="h-full w-full object-cover zoom-hover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-heading text-3xl font-bold text-foreground">Our <span className="text-gradient">Mission & Vision</span></h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border bg-card p-6 card-shadow">
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <i className="fas fa-bullseye text-primary"></i> Our Mission
              </h3>
              <p className="mt-2 text-muted-foreground">
                To provide affordable, high-quality education that empowers students to achieve academic excellence 
                and become confident, well-rounded individuals.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6 card-shadow">
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <i className="fas fa-eye text-primary"></i> Our Vision
              </h3>
              <p className="mt-2 text-muted-foreground">
                To be the most trusted and preferred coaching institute that transforms every student's 
                learning journey and builds a generation of capable leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Teaching Approach */}
    <section className="section-padding bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground">Our Teaching <span className="text-gradient">Approach</span></h2>
          <div className="mt-6 space-y-4">
            {[
              { icon: "fas fa-lightbulb", title: "Conceptual Learning", desc: "Focus on understanding concepts rather than rote memorization." },
              { icon: "fas fa-chart-line", title: "Progress Tracking", desc: "Regular assessments and parent-teacher meetings for continuous feedback." },
              { icon: "fas fa-puzzle-piece", title: "Interactive Methods", desc: "Engaging activities, group discussions and practical demonstrations." },
              { icon: "fas fa-heart", title: "Student-Centric", desc: "Individual attention to address unique learning needs of every student." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border bg-card p-4 transition-all duration-200 hover:card-shadow">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl card-shadow">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
            alt="Teaching approach"
            className="h-full w-full object-cover zoom-hover"
          />
        </div>
      </div>
    </section>
  </div>
);

export default About;
