import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    color: "from-indigo-500 to-violet-600",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 80 },
      { name: "NLP", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 72 },
      { name: "Scikit-learn", level: 90 },
    ],
  },
  {
    title: "Programming & Data",
    icon: "💻",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 80 },
      { name: "NumPy / Pandas", level: 88 },
      { name: "Matplotlib", level: 82 },
      { name: "HTML / CSS", level: 70 },
      { name: "Streamlit", level: 78 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 72 },
      { name: "Azure AI", level: 70 },
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 88 },
    ],
  },
];

const techTags = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLTK",
  "Transformers", "Pandas", "NumPy", "Matplotlib", "SQL",
  "Streamlit", "Git", "GitHub", "Power BI", "Tableau",
  "Azure AI", "Jupyter", "TF-IDF", "BERT", "Logistic Regression"
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">{"// skills.map(s => s.level)"}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="card-glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-foreground font-semibold">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted-foreground font-mono">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: ci * 0.15 + si * 0.07 + 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-glass rounded-2xl p-8 border border-white/5"
        >
          <h3 className="text-foreground font-semibold text-center mb-6 font-mono text-sm text-primary">
            // Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default font-mono"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
