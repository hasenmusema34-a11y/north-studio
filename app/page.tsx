
import ContactForm from "./ContactForm";

const topics = [
  { title: "YouTube", text: "Learn to plan videos, create useful content, and grow a channel with patience." },
  { title: "Freelancing", text: "Explore digital skills, build a portfolio, and learn how to present your work." },
  { title: "Digital products", text: "Discover guides, templates, workbooks, and other useful digital products." },
  { title: "E-commerce", text: "Understand online stores, customers, products, and selling responsibly." },
  { title: "AI tools", text: "Use AI to brainstorm, research, plan, and improve your creative work." },
  { title: "Money basics", text: "Learn about budgeting, saving, risk, and realistic financial expectations." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#20251f]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#faf9f6]/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-3xl font-black">roki<span className="text-emerald-700">.</span></a>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#learn">Learn</a>
            <a href="#resources">Free resources</a>
            <a href="#shop">Digital shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#learn" className="rounded-full bg-[#20251f] px-5 py-3 text-sm font-semibold text-white">Start learning ↗</a>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-emerald-800">Practical learning for beginners</p>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">Build your skills.<span className="block text-emerald-800">Create your opportunities.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#686c65]">Roki helps beginners explore online work, learn useful digital skills, and understand money decisions through clear educational content.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#learn" className="rounded-full bg-emerald-800 px-6 py-4 font-semibold text-white">Explore learning topics ↗</a>
            <a href="#resources" className="rounded-full border border-black/20 px-6 py-4 font-semibold">Find free resources</a>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-6">
            <span className="text-4xl">🚀</span>
            <p className="text-sm leading-6 text-[#686c65]">Meet Roki, your learning companion.<br />Small steps. Useful skills. Honest guidance.</p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#e8e9df] p-8 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Your learning journey</p>
          <div className="my-8 rounded-3xl bg-emerald-800 p-8 text-white">
            <span className="text-7xl">🚀</span>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-emerald-200">Meet Roki</p>
            <h2 className="mt-3 text-3xl font-semibold">Your next skill starts with one step.</h2>
            <p className="mt-4 leading-7 text-white/80">Explore ideas, practice what you learn, and keep improving.</p>
          </div>
          <p className="font-semibold">Progress over promises.</p>
          <p className="mt-1 text-sm text-[#686c65]">Learn at your own pace.</p>
        </div>
      </section>

      <section id="learn" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">What you can learn</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">Useful knowledge for your online journey.</h2>
          <p className="mt-5 max-w-xl leading-7 text-[#686c65]">Choose one topic, practice it, and add more skills as you grow.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <article key={topic.title} className="rounded-3xl border border-black/10 p-7 transition hover:shadow-lg">
                <p className="text-sm text-emerald-800">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold">{topic.title}</h3>
                <p className="mt-3 leading-7 text-[#686c65]">{topic.text}</p>
                <a href="#resources" className="mt-6 inline-block font-semibold text-emerald-800">Explore resources →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Free resources</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Learn something useful. Put it into practice.</h2>
            <p className="mt-6 leading-8 text-[#686c65]">Beginner checklists, planning worksheets, and practical guides will be added here as they become available.</p>
            <a href="#contact" className="mt-7 inline-block rounded-full bg-[#20251f] px-6 py-4 font-semibold text-white">Ask about resources ↗</a>
          </div>
          <div className="rounded-3xl bg-[#e8e9df] p-8">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-2xl font-semibold">Your first learning plan</h3>
              <ul className="mt-5 space-y-4 text-[#555b52]">
                <li>✓ Choose one skill to explore.</li>
                <li>✓ Set a realistic practice goal.</li>
                <li>✓ Create a simple example of your work.</li>
                <li>✓ Review what you can improve.</li>
              </ul>
              <p className="mt-5 border-t border-black/10 pt-4 text-sm text-[#686c65]">A starter checklist from Roki.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="bg-[#20251f] px-6 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">Digital shop</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Practical tools for your next step.</h2>
            <p className="mt-6 leading-8 text-white/70">Roki plans to offer original guidebooks, templates, workbooks, and digital learning materials.</p>
          </div>
          <div className="rounded-3xl border border-white/20 p-8">
            <span className="text-4xl">✦</span>
            <h3 className="mt-5 text-2xl font-semibold">Coming soon</h3>
            <p className="mt-3 leading-7 text-white/70">Helpful learning materials without unrealistic promises or overnight-success claims.</p>
            <a href="#contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#20251f]">Contact Roki ↗</a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-3xl bg-[#e8e9df] p-8 sm:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">The Roki approach</p>
            <p className="mt-8 text-4xl font-semibold leading-tight">Learn clearly.<br />Practice patiently.<br />Think critically.</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">About Roki</p>
            <h2 className="mt-4 text-4xl font-semibold">A more honest way to learn about online opportunities.</h2>
            <p className="mt-6 leading-8 text-[#686c65]">Roki is an educational brand for beginners who want to understand digital skills and online work.</p>
            <p className="mt-4 leading-8 text-[#686c65]">We focus on learning, realistic expectations, and responsible decisions. No method can guarantee income.</p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-900">A note about financial content</p>
          <p className="mt-3 leading-7 text-amber-950/80">Roki provides education, not personalized financial advice. Online business outcomes vary. Be careful with anyone promising guaranteed income. Forex and other speculative activities can involve substantial losses.</p>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-emerald-800 px-7 py-14 text-white sm:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-200">Get in touch</p>
              <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">What would you like to learn next?</h2>
              <p className="mt-6 leading-7 text-white/80">Send a question, suggest a topic, or share feedback about Roki.</p>
              <p className="mt-8 border-t border-white/20 pt-5 text-sm text-white/80">Digital skills · Online work · AI tools · Money basics</p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-[#20251f] sm:p-8">
              <h3 className="text-2xl font-semibold">Send a message</h3>
              <p className="mt-2 text-sm text-[#686c65]">Fields marked with * are required.</p>
              <div className="mt-5"><ContactForm /></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-xl font-black">roki<span className="text-emerald-700">.</span></a>
          <p className="text-sm text-[#686c65]">© 2026 Roki. Educational content for learning and exploration.</p>
          <a href="#contact" className="text-sm font-medium">Contact Roki ↗</a>
        </div>
      </footer>
    </main>
  );
}
