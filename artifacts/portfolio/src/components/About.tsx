import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "7.93", label: "CGPA", suffix: "" },
  { value: "2", label: "Projects", suffix: "" },
  { value: "2", label: "Internships", suffix: "+" },
  { value: "4", label: "Certifications", suffix: "" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-24 relative section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// get_to_know_me()</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-glass rounded-2xl p-6 tech-border">
              <p className="text-muted-foreground leading-relaxed">
                I'm an <span className="text-primary font-semibold">AI & ML undergraduate</span> at 
                GITAM Deemed University, pursuing B.Tech in Computer Science Engineering with a 
                specialization in Artificial Intelligence and Machine Learning.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6 border border-white/5">
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in building <span className="text-accent font-semibold">intelligent systems</span> that 
                solve real-world problems. I've worked extensively with NLP, deep learning, and 
                classical ML algorithms, achieving impressive results in production deployments.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6 border border-white/5">
              <p className="text-muted-foreground leading-relaxed">
                I've completed internships at <span className="text-cyan-400 font-semibold">1Stop.ai</span> and 
                <span className="text-cyan-400 font-semibold"> Edunet Foundation (AICTE)</span>, 
                where I built production-grade ML models and deployed them using Streamlit for real-time inference.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {["B.Tech CSE (AI & ML)", "GITAM University", "Aug 2023 — Apr 2027"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="card-glass rounded-2xl p-6 text-center tech-border hover-lift"
                >
                  <div className="text-4xl font-bold text-gradient font-mono mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="card-glass rounded-2xl p-6 border border-white/5 space-y-4">
              <h3 className="text-foreground font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Education
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-foreground text-sm font-medium">GITAM Deemed University</p>
                    <p className="text-muted-foreground text-xs">B.Tech CSE (AI & ML) — CGPA: 7.93</p>
                    <p className="text-muted-foreground text-xs font-mono">Aug 2023 — Apr 2027</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                <span className="text-primary">📧</span> Contact
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-mono">korupoludeekshit9014@gmail.com</p>
                <p className="font-mono">+91 9381163857</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
