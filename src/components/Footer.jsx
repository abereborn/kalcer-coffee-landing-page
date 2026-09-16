import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";
import { navLinks } from "../data/coffeeData";

function TikTokIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15.5 3v9.6a3.4 3.4 0 1 1-3.4-3.4c.2 0 .4 0 .6.05" />
      <path d="M15.5 3c.4 2.2 2 3.9 4.2 4.2" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "WhatsApp", href: "#", Icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-paper">
      <div className="container-kalcer">
        <div className="grid grid-cols-1 gap-14 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <span className="font-display text-3xl">Kalcer Coffee</span>
            <p className="mt-4 max-w-xs font-hand text-2xl text-caramel-light">
              Good coffee. Better days.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-paper/45">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-paper/70 transition-colors hover:text-caramel-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-widest2 text-paper/45">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-paper/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} strokeWidth={1.6} className="mt-0.5 flex-shrink-0 text-caramel-light" />
                Jakarta, Indonesia
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} strokeWidth={1.6} className="mt-0.5 flex-shrink-0 text-caramel-light" />
                <a href="mailto:hello@kalcercoffee.com" className="transition-colors hover:text-caramel-light">
                  hello@kalcercoffee.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-caramel-light hover:text-caramel-light"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/10 py-8 text-xs text-paper/45 sm:flex-row">
          <p>© 2026 Kalcer Coffee. All rights reserved.</p>
          <p className="font-hand text-lg text-paper/60">Diseduh dengan cerita.</p>
        </div>
      </div>
    </footer>
  );
}
