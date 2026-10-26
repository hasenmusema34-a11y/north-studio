import ContactForm from "./ContactForm";
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive websites designed to help your business grow and reach more customers.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Intuitive digital experiences that make your products easier and more enjoyable to use.",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "Practical digital solutions that help you work smarter, serve customers, and grow.",
  },
];

const projects = [
  {
    number: "01",
    name: "Northstar",
    type: "Brand & digital experience",
    style: "bg-indigo-100 text-indigo-950",
    symbol: "N.",
  },
  {
    number: "02",
    name: "Form & Field",
    type: "E-commerce concept",
    style: "bg-amber-100 text-amber-950",
    symbol: "F.",
  },
  {
    number: "03",
    name: "Monogram",
    type: "Business website concept",
    style: "bg-emerald-100 text-emerald-950",
    symbol: "M.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#20251f]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf9f6]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-2xl font-black tracking-tight">
            north<span className="text-emerald-700">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#work" className="hover:text-emerald-700">Our work</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#20251f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Let&apos;s talk ↗
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Independent digital studio
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Good ideas deserve
            <span className="block text-emerald-800">great websites.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#686c65]">
            We help ambitious businesses build a stronger digital presence
            through thoughtful design, modern technology, and meaningful
            digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-emerald-800 px-7 py-4 font-semibold text-white transition hover:bg-emerald-900"
            >
              Start a project ↗
            </a>
            <a
              href="#work"
              className="rounded-full border border-black/15 px-7 py-4 font-semibold transition hover:bg-white"
            >
              Explore our work
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-black/10 pt-6">
            <div className="flex -space-x-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-amber-200 text-sm">D</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-emerald-200 text-sm">C</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-indigo-200 text-sm">S</span>
            </div>
            <p className="text-sm leading-6 text-[#686c65]">
              Thoughtful solutions.
              <br />
              Built around your business.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full bg-amber-200/80 blur-2xl" />
          <div className="absolute -bottom-5 -left-4 h-32 w-32 rounded-full bg-emerald-200/70 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#e8e9df] p-6 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#646b5e]">
                Ideas into impact
              </span>
              <span className="text-2xl">✳</span>
            </div>

            <div className="my-10 flex min-h-64 items-center justify-center">
              <div className="relative flex h-64 w-64 rotate-[-8deg] items-center justify-center rounded-[3rem] bg-emerald-800 shadow-2xl sm:h-72 sm:w-72">
                <div className="absolute inset-5 rounded-[2.5rem] border border-white/30" />
                <div className="text-center text-white">
                  <div className="text-7xl font-black tracking-tighter">n.</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em]">
                    Built with purpose
                  </div>
                </div>
                <div className="absolute -right-4 top-8 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-amber-300 text-3xl shadow-lg">
                  ↗
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-black/10 pt-5">
              <div>
                <p className="text-sm font-semibold">Strategy meets creativity.</p>
                <p className="mt-1 text-xs text-[#686c65]">Designed for what&apos;s next.</p>
              </div>
              <span className="text-2xl">→</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">What we do</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Solutions that move you forward.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#686c65]">
              From the first idea to the finished product, we focus on the
              things that make a real difference.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-black/10 p-7 transition hover:-translate-y-1 hover:border-emerald-800/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#858981]">{service.number}</span>
                  <span className="text-2xl transition group-hover:translate-x-1">↗</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#686c65]">
                  {service.description}
                </p>
                <a href="#contact" className="mt-8 inline-block text-sm font-bold text-emerald-800">
                  Discuss your project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center lg:px-10">
          <div className="rounded-3xl bg-[#e8e9df] p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Our philosophy</p>
            <p className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Less noise.
              <br />
              More meaning.
              <br />
              Better results.
            </p>
            <div className="mt-10 h-1 w-20 rounded-full bg-emerald-800" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">A little about us</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your goals are our starting point.
            </h2>
            <p className="mt-6 leading-8 text-[#686c65]">
              Every business has a different story. We take the time to
              understand yours, then build a digital experience that reflects
              your values and serves your customers.
            </p>
            <p className="mt-4 leading-8 text-[#686c65]">
              Our approach brings clear strategy, thoughtful design, and
              reliable technology together in one straightforward process.
            </p>
            <a href="#contact" className="mt-8 inline-block rounded-full bg-[#20251f] px-6 py-4 font-semibold text-white hover:bg-emerald-800">
              Get to know us ↗
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#20251f] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Selected work</p>
          <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Ideas, made tangible.</h2>
            <p className="max-w-md leading-7 text-white/60">
              A glimpse of the kind of digital experiences we can create.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number}>
                <div className={`flex aspect-[4/3] flex-col items-center justify-center rounded-3xl ${project.style}`}>
                  <span className="text-7xl font-black tracking-tight">{project.symbol}</span>
                  <span className="mt-3 text-xs uppercase tracking-[0.2em]">Creative concept</span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{project.type}</p>
                  </div>
                  <span className="text-xl">↗</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">
            These are illustrative portfolio concepts, not claims of completed client projects.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-4xl text-emerald-800">“</span>
          <h2 className="mt-4 text-3xl font-medium leading-relaxed tracking-tight sm:text-4xl">
            Great digital experiences start with understanding people and
            building around what matters to them.
          </h2>
          <p className="mt-6 text-sm text-[#686c65]">
            Our approach to every project
          </p>
        </div>
      </section>

      
<section id="contact" className="px-6 py-20 md:py-28 lg:px-10">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-emerald-800 px-7 py-14 text-white sm:px-12 md:py-20">
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
          Have a project in mind?
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-6 max-w-lg leading-7 text-white/80">
          Tell us about your goals and what you want to achieve.
          We&apos;ll help you explore the right solution.
        </p>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-sm text-white/70">Typical inquiries</p>
          <p className="mt-2 font-medium">Websites · Design · Digital solutions</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 text-[#20251f] sm:p-8">
        <h3 className="text-2xl font-semibold">Send us a message</h3>
        <p className="mt-2 text-sm text-[#686c65]">
          Fields marked with * are required.
        </p>

        <ContactForm />
      </div>
    </div>
  </div>
</section>


      <footer className="border-t border-black/10 bg-[#faf9f6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <a href="#" className="text-xl font-black tracking-tight">
            north<span className="text-emerald-700">.</span>
          </a>
          <p className="text-sm text-[#686c65]">
            © 2026 North Studio. All rights reserved.
          </p>
          <a href="#contact" className="text-sm font-medium hover:text-emerald-800">
            Get in touch ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
