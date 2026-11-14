import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, Globe } from "lucide-react";
import { contact, primaryWhatsAppUrl } from "@/lib/content";
import { assetUrl } from "@/lib/site-path";

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 0-5.18c.27 0 .53.04.77.12V9.68a5.73 5.73 0 0 0-.77-.05A5.68 5.68 0 1 0 15.54 15.3V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border pt-24">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-hero opacity-70" />
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Let's Grow Together!</p>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">
              Your Brand Deserves to <span className="text-gradient">Stand Out.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Partner with Mastera and take your business to the next level.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground hover:shadow-glow"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground hover:shadow-glow"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Explore</h3>
            <ul className="mt-5 space-y-3 text-foreground/90">
              <li><Link to="/about" className="hover:text-accent">About & Approach</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services & Industries</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent">Portfolio & Partners</Link></li>
              <li><Link to="/brands" className="hover:text-accent">Brand Identities</Link></li>
              <li><Link to="/pricing" className="hover:text-accent">Packages</Link></li>
              <li><Link to="/contact" className="hover:text-accent">How We Work & Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Contact</h3>
            <ul className="mt-5 space-y-4 text-foreground/90">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Head Office: {contact.office}</li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a></li>
              <li className="flex gap-3"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{contact.web}</li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {contact.phones.map((p, i) => (
                    <span key={p}>
                      {i > 0 && " | "}
                      <a href={i === 0 ? primaryWhatsAppUrl : `tel:${p.replace(/-/g, "")}`} className="hover:text-accent">{p}</a>
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border py-8 md:flex-row">
          <img src={assetUrl("/assets/4x/mastera-logo-light.webp")} alt="Mastera" className="h-10 w-auto" width={900} height={252} loading="lazy" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mastera Marketing & Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
