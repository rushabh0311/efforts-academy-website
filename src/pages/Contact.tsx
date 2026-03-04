import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
        <h1 className="font-heading text-4xl font-extrabold md:text-5xl">Contact Us</h1>
        <p className="mt-3 text-primary-foreground/70">We'd love to hear from you</p>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Get In Touch</h2>
            <p className="mt-3 text-muted-foreground">Feel free to reach out to us for any queries about admissions, courses, or general information.</p>

            <div className="mt-8 space-y-6">
              {[
                { icon: "fas fa-phone", title: "Phone", text: "+91 70000 00000", href: "tel:+917000000000" },
                { icon: "fas fa-envelope", title: "Email", text: "info@effortsacademy.com", href: "mailto:info@effortsacademy.com" },
                { icon: "fas fa-map-marker-alt", title: "Location", text: "123 Education Lane, Knowledge City, India - 400001", href: "#" },
                { icon: "fas fa-clock", title: "Working Hours", text: "Mon - Sat: 8:00 AM - 8:00 PM", href: "#" },
              ].map((item) => (
                <a key={item.title} href={item.href} className="flex gap-4 rounded-xl border bg-card p-4 transition-all duration-200 hover:card-shadow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border bg-card p-8 card-shadow">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <i className="fas fa-check text-3xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-foreground">Send Us a Message</h3>
                <input required className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your Name" />
                <input required type="email" className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your Email" />
                <input className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Subject" />
                <textarea required className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-none" placeholder="Your Message"></textarea>
                <button type="submit" className="w-full rounded-xl bg-primary py-3.5 font-heading font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-muted">
        <iframe
          title="Efforts Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.87!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTInMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
          className="h-[400px] w-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
