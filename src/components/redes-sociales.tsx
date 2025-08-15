// resources/js/components/app/SocialLinks.tsx
import React from "react";

type Props = {
  // Números en formato internacional sin "+"
  whatsappPrimary: string; // ej: "573052709376"
  whatsappSecondary?: string; // opcional
  instagramUrl?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
  message?: string; // mensaje precargado para WhatsApp
};

function buildWaUrl(phone: string, text?: string) {
  const base = `https://wa.me/${phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

const SocialLinks: React.FC<Props> = ({
  whatsappPrimary,
  whatsappSecondary,
  instagramUrl = "https://www.instagram.com/yoxcam__makeup",
  facebookUrl = "https://facebook.com/",
  tiktokUrl = "https://www.tiktok.com/@cxmila__7",
  message = "Hola 👋, vengo de la tienda y quiero más información.",
}) => {
  const items = [
    {
      key: "wa1",
      href: buildWaUrl(whatsappPrimary, message),
      label: "WhatsApp 1",
      bg: "bg-[#25D366]",
      ring: "ring-[#25D366]/50",
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.19c-.29-.14-1.71-.84-1.98-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-1.71-.84-2.83-1.5-3.97-3.41-.3-.52.3-.48.84-1.59.09-.19.04-.35-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48l-.54-.01c-.19 0-.48.07-.73.35-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.09 4.99 4.33.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.36-.06-.12-.25-.19-.54-.33z" />
          <path d="M26.72 5.28A13.46 13.46 0 0 0 16 1.33C8.55 1.33 2.5 7.38 2.5 14.83c0 2.37.62 4.69 1.81 6.72L2 30.67l9.36-2.28a13.44 13.44 0 0 0 4.64.8c7.45 0 13.5-6.05 13.5-13.5 0-3.61-1.4-7-3.78-9.41zm-10.72 22c-1.49 0-2.95-.29-4.32-.86l-.31-.13-5.49 1.34 1.36-5.35-.15-.33A11.43 11.43 0 0 1 4.5 14.83c0-6.34 5.16-11.5 11.5-11.5s11.5 5.16 11.5 11.5-5.16 11.5-11.5 11.5z" />
        </svg>
      ),
    },
    whatsappSecondary && {
      key: "wa2",
      href: buildWaUrl(whatsappSecondary, message),
      label: "WhatsApp 2",
      bg: "bg-[#25D366]",
      ring: "ring-[#25D366]/50",
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.19c-.29-.14-1.71-.84-1.98-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-1.71-.84-2.83-1.5-3.97-3.41-.3-.52.3-.48.84-1.59.09-.19.04-.35-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48l-.54-.01c-.19 0-.48.07-.73.35-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.09 4.99 4.33.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.36-.06-.12-.25-.19-.54-.33z" />
          <path d="M26.72 5.28A13.46 13.46 0 0 0 16 1.33C8.55 1.33 2.5 7.38 2.5 14.83c0 2.37.62 4.69 1.81 6.72L2 30.67l9.36-2.28a13.44 13.44 0 0 0 4.64.8c7.45 0 13.5-6.05 13.5-13.5 0-3.61-1.4-7-3.78-9.41zm-10.72 22c-1.49 0-2.95-.29-4.32-.86l-.31-.13-5.49 1.34 1.36-5.35-.15-.33A11.43 11.43 0 0 1 4.5 14.83c0-6.34 5.16-11.5 11.5-11.5s11.5 5.16 11.5 11.5-5.16 11.5-11.5 11.5z" />
        </svg>
      ),
    },
    {
      key: "ig",
      href: instagramUrl,
      label: "Instagram",
      bg: "bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500",
      ring: "ring-pink-400/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM18.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      ),
    },
    {
      key: "fb",
      href: facebookUrl,
      label: "Facebook",
      bg: "bg-[#0866FF]",
      ring: "ring-[#0866FF]/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 12.06C22 6.5 17.52 2 11.94 2 6.36 2 2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H8.1v-2.9h2.34V9.64c0-2.32 1.39-3.6 3.51-3.6.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1V22c4.78-.76 8.44-4.92 8.44-9.94z" />
        </svg>
      ),
    },
    {
      key: "tt",
      href: tiktokUrl,
      label: "TikTok",
      bg: "bg-black",
      ring: "ring-white/30",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 8.5a6.7 6.7 0 0 1-4.2-1.5v6.3a6.3 6.3 0 1 1-5.4-6.24v2.9a3.4 3.4 0 1 0 2.7 3.33V2h2.7a6.7 6.7 0 0 0 4.2 4.2V8.5z" />
        </svg>
      ),
    },
  ].filter(Boolean) as Array<{
    key: string;
    href: string;
    label: string;
    bg: string;
    ring: string;
    icon: React.ReactNode;
  }>;

  return (
    <section
      aria-label="Redes sociales"
      className="mx-auto max-w-7xl px-4 py-6"
    >
      {/* WhatsApp (dos botones) */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items
          .filter((i) => i.key === "wa1" || i.key === "wa2")
          .map((i) => (
            <a
              key={i.key}
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-3 rounded-2xl ${i.bg} px-4 py-3 font-semibold text-white shadow-md ring-1 ${i.ring} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur-sm transition group-hover:scale-[1.05]">
                {i.icon}
              </span>
              <span>{i.label}</span>
            </a>
          ))}
      </div>

      {/* Otras redes */}
      <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        {items
          .filter((i) => !i.key.startsWith("wa"))
          .map((i) => (
            <a
              key={i.key}
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 rounded-full ${i.bg} px-4 py-2 text-sm font-semibold text-white shadow ring-1 ${i.ring} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur-sm transition group-hover:scale-[1.05]">
                {i.icon}
              </span>
              <span>{i.label}</span>
            </a>
          ))}
      </div>
    </section>
  );
};

export default SocialLinks;
