import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "1Stop.ai",
    period: "May 2025 — Jun 2025",
    type: "Internship",
    color: "indigo",
    icon: "🤖",
    project: "Email Spam Classification",
    highlights: [
      "Built spam classifier using TF-IDF + Naive Bayes & Logistic Regression",
      "Achieved 97% accuracy on real-world email dataset",
      "Evaluated model using Precision, Recall, and F1-Score metrics",
      "Applied preprocessing techniques: tokenization, stopword removal, vectorization",
    ],
    tools: ["Python", "Scikit-learn", "TF-IDF", "Naive Bayes"],
    github: "https://github.com/Deekshit1325/Email-spam-classification",
  },
  {
    title: "AI Virtual Intern",
    company: "Edunet Foundation (AICTE)",
    period: "May 2025 — Jun 2025",
    type: "Virtual Internship",
    color: "violet",
    icon: "🎓",
    project: "Sentiment Analysis on Product Reviews",
    highlights: [
      "Developed NLP model using TF-IDF + Logistic Regression for sentiment prediction",
      "Deployed real-time Streamlit app for live review classification",
      "Worked with large-scale Amazon product review datasets",
      "Implemented multi-class sentiment analysis: positive, negative, neutral",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Streamlit", "NLP"],
    github: "https://github.com/Deekshit1325/Sentiment-Analysis-on-Product-Reviews",
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; grad: string }> = {
  indigo: {
    dot: "bg-indigo-500",
    border: "border-indigo-500/30",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    grad: "from-indigo-500/10 to-transparent",
  },
  violet: {
    dot: "bg-violet-500",
    border: "border-violet-500/30",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    grad: "from-violet-500/10 to-transparent",
  },
};

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// career.experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hands-on industry experience in AI and machine learning through internships and collaborative projects.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-background z-10">
                    <div className={`w-full h-full rounded-full ${colors.dot} animate-pulse-glow`}></div>
                  </div>

                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    {i % 2 === 0 && (
                      <div className="space-y-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${colors.badge}`}>
                          <span>{exp.icon}</span>
                          {exp.type}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-muted-foreground text-sm font-mono">{exp.period}</p>
                      </div>
                    )}
                    {i % 2 !== 0 && (
                      <motion.div
                        className={`card-glass rounded-2xl p-6 border ${colors.border} text-left`}
                      >
                        <div className={`h-1 w-full bg-gradient-to-r ${colors.grad} rounded-t-xl -mt-6 -mx-6 mb-4 w-[calc(100%+48px)]`}></div>
                        <p className="text-primary text-sm font-mono mb-3">📁 {exp.project}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5">▹</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tools.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-xs font-mono text-muted-foreground border border-white/10">
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View on GitHub
                        </a>
                      </motion.div>
                    )}
                  </div>

                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                    {i % 2 === 0 && (
                      <motion.div
                        className={`card-glass rounded-2xl p-6 border ${colors.border}`}
                      >
                        <p className="text-primary text-sm font-mono mb-3">📁 {exp.project}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5">▹</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tools.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-xs font-mono text-muted-foreground border border-white/10">
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View on GitHub
                        </a>
                      </motion.div>
                    )}
                    {i % 2 !== 0 && (
                      <div className="space-y-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${colors.badge}`}>
                          <span>{exp.icon}</span>
                          {exp.type}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-muted-foreground text-sm font-mono">{exp.period}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
