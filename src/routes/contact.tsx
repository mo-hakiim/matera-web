import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WorkflowSteps } from "@/components/site/WorkflowSteps";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact, packages } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "How We Work & Contact | Mastera, Hargeisa" },
      {
        name: "description",
        content:
          "Contact Mastera in Hargeisa, Somaliland — Mastera0018@gmail.com, 063-8775808 | 065-8775808. See our step-by-step workflow.",
      },
      { property: "og:title", content: "Contact Mastera — Let's Grow Together" },
      { property: "og:description", content: "Get in touch and let us know how we can help." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Head Office", value: contact.office },
  { icon: Mail, label: "Email us", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Globe, label: "Web", value: contact.web },
];

function Contact() {
  const [form, setForm] = useState({ name: "", business: "", plan: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry from ${form.name || "website visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Interested in: ${form.plan || "Not sure yet"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let's <span className="text-gradient">grow together.</span>
          </>
        }
        intro="Get in touch and let us know how we can help."
      />

      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-center gap-5 rounded-3xl glass p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                  <d.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block text-lg font-semibold hover:text-accent">{d.value}</a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-5 rounded-3xl glass p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-energy text-accent-foreground shadow-glow-accent">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Call us</p>
                <p className="mt-1 text-lg font-semibold">
                  {contact.phones.map((p, i) => (
                    <span key={p}>
                      {i > 0 && " | "}
                      <a href={`tel:${p.replace(/-/g, "")}`} className="hover:text-accent">{p}</a>
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="relative overflow-hidden rounded-[2rem] glass p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
              <h2 className="relative text-3xl font-extrabold">Tell us about your brand</h2>
              <p className="relative mt-2 text-muted-foreground">We'll reply by email with next steps.</p>
              <div className="relative mt-8 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Your name
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 rounded-xl bg-surface" maxLength={100} />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Business
                  <Input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="h-12 rounded-xl bg-surface" maxLength={120} />
                </label>
                <label className="grid gap-2 text-sm font-medium md:col-span-2">
                  Interested in
                  <select
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className="h-12 rounded-xl border border-input bg-surface px-3 text-sm"
                  >
                    <option value="">Not sure yet</option>
                    {packages.map((p) => (
                      <option key={p.id} value={p.name}>{p.no} — {p.name}</option>
                    ))}
                    <option value="Brand identity project">Brand identity project</option>
                    <option value="Media production">Media production</option>
                    <option value="Training">Training</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium md:col-span-2">
                  Message
                  <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="min-h-36 rounded-xl bg-surface" maxLength={2000} />
                </label>
              </div>
              <Button type="submit" variant="energy" size="xl" className="relative mt-6 w-full md:w-auto">
                Send message <Send />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="How we work & service terms"
          title="A clear process, from brief to results."
          className="mb-14"
        />
        <WorkflowSteps />
      </section>
    </>
  );
}
