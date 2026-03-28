import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Email Spam Classification",
    description:
      "Built a spam classifier using TF-IDF combined with Naive Bayes & Logistic Regression algorithms. Achieved an exceptional 97% accuracy, evaluated with Precision, Recall, and F1-Score metrics.",
    tags: ["Python", "Scikit-learn", "TF-IDF", "NLP", "Logistic Regression", "Naive Bayes"],
    github: "https://github.com/Deekshit1325/Email-spam-classification",
    category: "ML / NLP",
    accent: "indigo",
    icon: "📧",
    stats: [
      { label: "Accuracy", value: "97%" },
      { label: "Algorithm", value: "NB + LR" },
    ],
  },
  {
    title: "Sentiment Analysis on Product Reviews",
    description:
      "Developed an NLP model using TF-IDF and Logistic Regression for multi-class sentiment prediction. Deployed a live Streamlit app for real-time review classification and analysis.",
    tags: ["Python", "Pandas", "Matplotlib", "TF-IDF", "Streamlit", "NLP"],
    github: "https://github.com/Deekshit1325/Sentiment-Analysis-on-Product-Reviews",
    category: "NLP / Deployment",
    accent: "violet",
    icon: "💬",
    stats: [
      { label: "Platform", value: "Streamlit" },
      { label: "Type", value: "Real-time" },
    ],
  },
];

const accentMap: Record<string, string> = {
  indigo: "border-indigo-500/30 hover:border-indigo-500/60 [&:hover_.tag]:bg-indigo-500/10",
  violet: "border-violet-500/30 hover:border-violet-500/60 [&:hover_.tag]:bg-violet-500/10",
  cyan: "border-cyan-500/30 hover:border-cyan-500/60 [&:hover_.tag]:bg-cyan-500/10",
};

const gradientMap: Record<string, string> = {
  indigo: "from-indigo-600/20 to-violet-600/20",
  violet: "from-violet-600/20 to-purple-600/20",
  cyan: "from-cyan-600/20 to-blue-600/20",
};

const glowMap: Record<string, string> = {
  indigo: "shadow-indigo-500/20",
  violet: "shadow-violet-500/20",
  cyan: "shadow-cyan-500/20",
};

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" ref={ref} className="py-24 relative section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">{"// projects.filter(p => p.impact)"}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world AI & ML solutions built during internships and research explorations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative card-glass rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl ${accentMap[project.accent]} ${glowMap[project.accent]}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[project.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group/btn"
                  >
                    <svg className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-primary font-mono">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground font-mono transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Deekshit1325"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 card-glass rounded-xl border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all group"
          >
            <svg className="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
