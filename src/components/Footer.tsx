import { Link } from "react-router-dom";
import { SocialIcons } from "./Header";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Services", path: "/services" },
  { label: "Schemes", path: "/schemes" },
  { label: "Register", path: "/register" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
              EA
            </div>
            <span className="font-heading text-xl font-bold">Efforts Academy</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Building Strong Foundations for Bright Futures. Quality coaching for students from 1st to 10th standard.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Connect With Us</h4>
          <SocialIcons />
          <p className="mt-4 text-sm text-primary-foreground/60">
<<<<<<< HEAD
            <i className="fas fa-phone mr-2"></i>+91 9823618142
          </p>
          <p className="mt-2 text-sm text-primary-foreground/60">
            <i className="fas fa-envelope mr-2"></i>milindkothavade71@gmail.com
=======
            <i className="fas fa-phone mr-2"></i>+91 70000 00000
          </p>
          <p className="mt-2 text-sm text-primary-foreground/60">
            <i className="fas fa-envelope mr-2"></i>info@effortsacademy.com
>>>>>>> 140539846852a624afa49c224564faebe1419ed4
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} Efforts Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
