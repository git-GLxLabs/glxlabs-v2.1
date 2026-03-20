import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const stones = [
  { title: "Claude — Thinking Partner", desc: "Strategy. Discovery. Narrative construction." },
  { title: "Evidence Enhancement — Clarity Tools", desc: "Audio enhancement. Video stabilization. Document sharpening." },
  { title: "NotebookLM — Document Intelligence", desc: "Upload your entire case file. Ask it anything. It tells you what your discovery actually says — and what it doesn't." },
  { title: "PDF & Forms Automation — Repetitive Work Collapse ???????", desc: "The work that eats your night shouldn't require your brain." },
  { title: "Second Brain --- scheduling and organization.", desc: "Every case you've worked becomes searchable institutional knowledge. Stop starting from zero." }
];

const Legal = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY ?? "",
          email,
          subject: "Legal Page — Prompt Guide Request",
          from_name: "GLxLabs Legal Page",
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      toast.success("You're on the list! Check your inbox after the session.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gulf-navy text-primary-foreground py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl md:text-6xl leading-tight mb-4">
              The Best Story <span className="text-accent">Wins.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-lg md:text-xl font-body text-primary-foreground/85 mb-4 max-w-2xl mx-auto">
              Five storytelling tools that collapse the labor of public defense — and the AI stack that powers them.
            </motion.p>
            <p className="text-sm font-body text-primary-foreground/50 mb-8">
              Mississippi Public Defenders Conference · April 22–24, 2025 · Gulfport, MS
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="#prompt-guide">Contact Me</a>
            </Button>
            <p className="text-base md:text-lg italic text-accent font-body mt-4">
              Get a free prompt guide in the process.<br /><br />
              Let me know you'll be there.<br />
              Reach out.<br />
              Feel free to ask any questions ahead of time.
            </p>
          </div>
        </section>

        {/* Defense is Documentary */}
        <section className="bg-card py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6">Defense is/as Documentary Filmmaking??? In Defense of Ai... a documentary filmmakers perspective. </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">[NTS: something along these lines. You don't build a case. You reconstruct one. (?????)))). From chaos, contradiction, and incomplete discovery — you build a narrative that holds. The is what documentarians do. The process anis identical. The Tools are different now... for all of us... AI collapses the labor from months to days. </p>
          </div>
        </section>

        {/* Five Stones */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">Five Tools:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {stones.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-display font-extrabold text-accent text-xl">{i + 1}</span>
                    <h3 className="font-display font-bold text-foreground">{s.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Cost callout */}
            <div className="mt-10 bg-accent text-accent-foreground rounded-lg p-6 text-center">
              <p className="font-display font-bold text-lg">
                Running total of tools here should be less than &lt; 150
              </p>
            </div>
          </div>
        </section>

        {/* Prompt Guide — Email Capture */}
        <section id="prompt-guide" className="bg-gulf-navy text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Prompt Guide </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8">
              (Available via digital Download during session). If you are unable to attend or would like to reach out ahead of time put your email in the form and I'll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-md px-4 py-3 font-body text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="cta" type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send me the guide"}
              </Button>
            </form>
          </div>
        </section>

        {/* One More Thing */}
        <section className="bg-card py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6">One More Thing.</h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              This session opens with a clip from <em>No Other Land</em> — the 2024 Oscar-winning documentary with no U.S. distributor. It's a film about what happens when the official story goes unchallenged. Public defenders challenge the official story every day. That's the work.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-gulf-blue text-primary-foreground py-20 md:py-24">
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Legal;