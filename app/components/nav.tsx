import { useLocation, Link } from "react-router";
import { ConsultingLogo } from "./icons/consulting-logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Hjem", path: "/", mobileOnly: true },
    { name: "Tjenester", path: "/tjenester" },
    { name: "Prosjekter", path: "/prosjekter" },
    { name: "Om oss", path: "/om-oss" },
  ];

  return (
    <nav
      className={`
      flex justify-between items-center px-6 md:px-24 py-4 
      text-white fixed top-0 left-0 right-0 z-50 
      /* Vi animerer kun bakgrunnsfarge for å spare krefter */
      transition-colors duration-300
      ${open ? "bg-[#011627]" : "bg-[#011627]/40 backdrop-blur-md border-b border-white/5"}
    `}
    >
      <div className="relative z-50">
        <Link to="/" onClick={() => setOpen(false)} className="hover:opacity-80 transition-opacity">
          <ConsultingLogo className="h-12 md:h-14" />
        </Link>
      </div>

      <div className="hidden md:flex gap-10 text-lg font-medium">
        {navLinks
          .filter((link) => !link.mobileOnly)
          .map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-200 hover:text-blue-400 ${
                isActive(link.path) ? "text-blue-400" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
      </div>

      <button
        type="button"
        className="md:hidden relative z-50 p-2 text-white outline-none"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Lukk meny" : "Åpne meny"}
      >
        <div className="transition-transform duration-200 active:scale-90">
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </button>
      <div
        className={`
          fixed inset-0 bg-[#011627] 
          flex flex-col items-center justify-center 
          gap-10 text-3xl z-40 md:hidden
          /* Bruker transform for 60fps animasjon */
          transition-all duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        {navLinks.map((link, idx) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              font-semibold tracking-widest transition-all duration-500
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              ${isActive(link.path) ? "text-blue-400" : "text-white"}
            `}
            style={{ transitionDelay: open ? `${idx * 50 + 100}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
