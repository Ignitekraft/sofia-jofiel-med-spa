import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, CalendarDays } from "lucide-react";

const servicePricing = [
  { category: "Consultation", service: "Consultation", amount: 30000 },
  { category: "Facial Treatment", service: "Deep Cleansing Facial", amount: 60000 },
  { category: "Facial Treatment", service: "Anti-Acne Facial", amount: 60000 },
  { category: "Facial Treatment", service: "HydraFacial", amount: 65000 },
  { category: "Facial Treatment", service: "Carbon Laser Facial", amount: 65000 },
  { category: "Facial Treatment", service: "Dermaplaning", amount: 50000 },
  { category: "Facial Treatment", service: "Signature Facial", amount: 50000 },
  { category: "Facial Treatment", service: "Vajacial (VJAY Facial)", amount: 80000 },
  { category: "Chemical Peel", service: "Salicylic Chemical Peel (Acne/Acne-Prone Skin)", amount: 70000 },
  { category: "Chemical Peel", service: "PRX Peel (Instant Glow)", amount: 180000 },
  { category: "Chemical Peel", service: "Cosmelan Peel", amount: 850000 },
  { category: "Chemical Peel", service: "TCA Peel (Dark Knuckles, Elbows & Knees)", amount: 120000 },
  { category: "Medical Weight Management", service: "semaglutide/tirzepatide 2.5 mg", amount: 750000 },
  { category: "Medical Weight Management", service: "semaglutide/tirzepatide 5 mg", amount: 850000 },
  { category: "Medical Weight Management", service: "semaglutide/tirzepatide 7.5 mg", amount: 1000000 },
  { category: "Medical Weight Management", service: "semaglutide/tirzepatide 10 mg", amount: 1100000 },
  { category: "Medical Weight Management", service: "semaglutide/tirzepatide 12.5 mg", amount: 1200000 },
  { category: "Medical Weight Management", service: "semaglutide/tirzepatide 15 mg", amount: 1300000 },
  { category: "Laser Brow Removal", service: "Laser Brow Removal", amount: 80000 },
  { category: "Laser Brow Removal", service: "Laser Tattoo Removal", amount: 70000 },
  { category: "Sauna", service: "Body Polishing & Sauna", amount: 70000 },
  { category: "Sauna", service: "Full Body Scrubbing", amount: 50000 },
  { category: "IV Infusion & Wellness", service: "Anti-Aging Drip", amount: 50000 },
  { category: "IV Infusion & Wellness", service: "IV Glow Therapy", amount: 60000 },
  { category: "IV Infusion & Wellness", service: "Detox IV", amount: 80000 },
  { category: "IV Infusion & Wellness", service: "NAD Infusion", amount: 80000 },
  { category: "IV Infusion & Wellness", service: "Skinny Drip", amount: 50000 },
  { category: "IV Infusion & Wellness", service: "Vitamin B12 Shot", amount: 35000 },
  { category: "Wellness", service: "O-Shot/ penis shot", amount: 150000 },
  { category: "Microneedling", service: "Vampire Facial (PRP Microneedling)", amount: 180000 },
  { category: "Microneedling", service: "PRX Microneedling", amount: 280000 },
  { category: "Microneedling", service: "Stretch Mark PRP Microneedling", amount: 80000 },
  { category: "Microneedling", service: "PRP Hair Loss Treatment", amount: 150000 },
  { category: "Microneedling", service: "PRP Hair Loss Treatment + Minoxidil", amount: 280000 },
  { category: "Mesotherapy & Skin Boosters", service: "Glow Booster Mesotherapy", amount: 150000 },
  { category: "Mesotherapy & Skin Boosters", service: "Meso Botox", amount: 400000 },
  { category: "Mesotherapy & Skin Boosters", service: "Polynucleotide Under Eye Treatment", amount: 250000 },
  { category: "Mesotherapy & Skin Boosters", service: "Skin Booster/Mesotherapy", amount: 180000 },
  { category: "Botox Treatments", service: "Anti-Wrinkle Botox", amount: 280000 },
  { category: "Botox Treatments", service: "Masseter Botox", amount: 280000 },
  { category: "Botox Treatments", service: "Botox for Hyperhidrosis (Excessive Armpit Sweating)", amount: 280000 },
  { category: "Dermal Fillers", service: "Dermal Filler", amount: 280000 },
  { category: "Dermal Fillers", service: "Labial Filler (3 ml)", amount: 1100000 },
  { category: "Dermal Fillers", service: "Labial Filler (4 ml)", amount: 1300000 },
  { category: "PDO Threads", service: "PDO Mono Threads", amount: 150000 },
  { category: "PDO Threads", service: "PDO Thread Nose Lift", amount: 250000 },
  { category: "PDO Threads", service: "PDO Thread Double Chin Lift", amount: 450000 },
  { category: "PDO Threads", service: "PDO Thread Face Lift", amount: 750000 },
  { category: "Injection Lipolysis & Body Contouring", service: "Injection Lipolysis (Fat Reduction)", amount: 80000 },
  { category: "Injection Lipolysis & Body Contouring", service: "EM Sculpt", amount: 75000 },
  { category: "Injection Lipolysis & Body Contouring", service: "Radio Frequency", amount: 220000 },
  { category: "Laser Treatments", service: "Chin Laser Hair Removal", amount: 60000 },
  { category: "Laser Treatments", service: "Laser Hair Removal (Armpits)", amount: 70000 },
  { category: "Laser Treatments", service: "Laser Hair Removal (VJAY)", amount: 75000 },
  { category: "Laser Treatments", service: "Laser Hair Removal (Full Face)", amount: 95000 },
  { category: "Laser Treatments", service: "Laser Hair Removal (Hollywood)", amount: 110000 },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value);
}

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services & Price List | Sofia Jofiel" },
      { name: "description", content: "Browse Sofia Jofiel treatment prices and service list for medical aesthetics, laser, wellness, and body contouring." },
    ],
  }),
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/20 bg-[#050505]">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link to="/" className="text-lg font-semibold tracking-[0.2em] text-white uppercase">Sofia Jofiel</Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            <Link to="/" className="text-xs font-semibold uppercase text-white/80 hover:text-gold">Home</Link>
            <Link to="/services" className="text-xs font-semibold uppercase text-gold">Services</Link>
          </nav>
          <Link to="/" className="inline-flex items-center gap-2 rounded-none border border-white/20 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-gold hover:text-gold">
            <ArrowLeft size={14} /> Back home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
          Services &amp; Price List
        </h1>

        <div className="mt-10 overflow-hidden border border-white/60 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
          <div className="grid grid-cols-[1fr_1.7fr_0.8fr] border-b border-white/60 bg-black text-left text-2xl font-semibold uppercase text-white">
            <div className="border-r border-white/60 px-5 py-5">Category</div>
            <div className="border-r border-white/60 px-5 py-5">Service</div>
            <div className="px-5 py-5">Intended price</div>
          </div>

          {servicePricing.map((item, index) => (
            <div key={`${item.category}-${item.service}-${index}`} className="grid grid-cols-[1fr_1.7fr_0.8fr] border-b border-white/60 last:border-b-0 text-base text-white/90">
              <div className="border-r border-white/60 px-5 py-4 font-medium text-white">{item.category}</div>
              <div className="border-r border-white/60 px-5 py-4 text-center md:text-left">{item.service}</div>
              <div className="px-5 py-4 text-right font-medium text-white">₦{formatPrice(item.amount)}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-10">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-white sm:text-6xl">Operational guidelines</h2>
            <div className="mt-8 space-y-5 text-2xl text-white/95">
              <div>
                <p className="font-semibold">Operating Hours</p>
                <ul className="mt-4 space-y-3 text-white/85">
                  <li>• Open: 7 Days a Week</li>
                  <li>• Monday – Saturday: 10:00 AM – 6:00 PM</li>
                  <li>• Sunday (Corporate Day): 2:00 PM – 5:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-white sm:text-6xl">Staff discount policy</h2>
            <p className="mt-6 max-w-6xl text-2xl leading-relaxed text-white/90">
              All permanent employees of Sofia Jofiel Med Spa are entitled to a 10% discount on spa services. The discount is non-transferable, subject to management approval, and may not be combined with other promotional offers. Treatments must be scheduled outside peak business hours where practicable.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-end">
          <Link to="/" className="inline-flex items-center gap-3 rounded-none border border-gold bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] shadow-[0_0_20px_rgba(201,170,85,0.25)] transition hover:brightness-110">
            Book a consultation <CalendarDays size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
