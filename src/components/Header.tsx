import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      "1st – 4th Standard Coaching",
      "5th – 7th Standard Coaching",
      "8th – 10th Standard Coaching",
      "Doubt Solving Sessions",
      "Weekly Test Series",
    ],
  },
  {
    label: "Schemes",
    path: "/schemes",
    dropdown: [
      "Scholarship Scheme",
      "Early Admission Offer",
      "Referral Program",
      "Merit Based Discount",
    ],
  },
  { label: "Register", path: "/register" },
  { label: "Contact Us", path: "/contact" },
];

const socialLinks = [
  { icon: "fab fa-whatsapp", href: "https://wa.me/917000000000", label: "WhatsApp" },
  { icon: "fab fa-facebook-f", href: "https://facebook.com", label: "Facebook" },
  { icon: "fab fa-youtube", href: "https://youtube.com", label: "YouTube" },
  { icon: "fab fa-linkedin-in", href: "https://linkedin.com", label: "LinkedIn" },
];

export const SocialIcons = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {socialLinks.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
      >
        <i className={s.icon}></i>
      </a>
    ))}
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md nav-shadow" : "bg-card"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
            EA
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            Efforts <span className="text-primary">Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 rounded-lg px-4 py-2 font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <i className="fas fa-chevron-down ml-1 text-[10px] transition-transform duration-200" style={{ transform: openDropdown === link.label ? "rotate(180deg)" : "" }}></i>
                )}
              </Link>
              {link.dropdown && openDropdown === link.label && (
                <div className="absolute left-0 top-full z-50 mt-1 min-w-[240px] animate-fade-in-up rounded-xl border bg-card p-2 card-shadow">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item}
                      to={link.path}
                      className="block rounded-lg px-4 py-2.5 text-sm text-foreground/70 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Social + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <SocialIcons className="hidden xl:flex" />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t bg-card px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <div className="flex items-center justify-between">
                <Link
                  to={link.path}
                  className={`block w-full rounded-lg px-4 py-3 font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="px-3 py-2 text-muted-foreground"
                  >
                    <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}></i>
                  </button>
                )}
              </div>
              {link.dropdown && openDropdown === link.label && (
                <div className="ml-4 border-l-2 border-primary/20 pl-4">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item}
                      to={link.path}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <SocialIcons />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
