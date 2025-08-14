import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "/", label: "Productos" },
  { href: "/combos", label: "Combos" },
  { href: "/redes-sociales", label: "Redes Sociales" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Obtener ruta actual
  const location = useLocation();
  const isActive = useMemo(
    () => (href: string) =>
      location.pathname === href ? "text-[#F1E6FF]" : "text-white",
    [location.pathname]
  );

  // Cierra al pasar a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Evita scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const baseLink =
    "relative font-medium transition-colors duration-300 " +
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#F1E6FF] " +
    "after:transition-all after:duration-300 after:content-[''] hover:text-[#F1E6FF] hover:after:w-full " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded";

  return (
    <header className="sticky top-0 z-40 bg-[#70268c] [padding-top:env(safe-area-inset-top)] text-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 rounded transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Ir al inicio"
        >
          <img
            className="h-10 w-auto rounded-[12px] bg-white p-1"
            src="/banner.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${baseLink} ${isActive(link.href)}`}
              aria-current={location.pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className={`h-6 w-6 transition-transform duration-200 ${
              open ? "rotate-90 opacity-0" : "opacity-100"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
          <svg
            className={`-ml-6 h-6 w-6 transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      {/* Backdrop (mobile) */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`fixed top-[56px] right-0 left-0 z-40 origin-top rounded-b-2xl bg-[#6a2384] shadow-lg ring-1 ring-black/5 transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${
          open
            ? "max-h-[60vh] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        } overflow-hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-4 pt-2 pb-4">
          <nav className="flex flex-col divide-y divide-white/10">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 text-base hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  location.pathname === link.href ? "text-[#F1E6FF]" : "text-white"
                }`}
                aria-current={location.pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
