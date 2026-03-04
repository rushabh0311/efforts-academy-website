const images = [
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Students collaborating" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", alt: "Classroom learning" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80", alt: "Books and learning" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "Students studying" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80", alt: "Academy activities" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", alt: "Education environment" },
];

const Gallery = () => (
  <div>
    <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
      <h1 className="font-heading text-4xl font-extrabold md:text-5xl">Gallery</h1>
      <p className="mt-3 text-primary-foreground/70">A glimpse into life at Efforts Academy</p>
    </section>

    <section className="section-padding bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl card-shadow">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Gallery;
