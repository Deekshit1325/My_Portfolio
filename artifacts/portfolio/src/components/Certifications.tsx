import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const certifications = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Hands-on experience with real Deloitte data analytics workflows and business insights.",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    platform: "Coursera",
    icon: "🐍",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    description: "Comprehensive Python programming skills for data science and AI applications.",
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    platform: "1Stop.ai",
    icon: "☁️",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    description: "Cloud AI services, cognitive services, and Azure Machine Learning fundamentals.",
    badge: "Microsoft Certified",
  },
  {
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    icon: "🧠",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    description: "Understanding generative AI concepts, applications, and practical use cases.",
  },
];

export default function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" ref={ref} className="py-24 relative section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// certifications.verified</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Certifications & <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuously upskilling through industry-recognized courses from top global institutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative card-glass rounded-2xl p-6 border ${cert.borderColor} transition-all duration-300 group overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`w-14 h-14 rounded-2xl ${cert.bgColor} border ${cert.borderColor} flex items-center justify-center text-2xl mb-4`}>
                {cert.icon}
              </div>

              {cert.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                    ✓ Certified
                  </span>
                </div>
              )}

              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {cert.title}
              </h3>

              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="border-t border-white/5 pt-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Issuer:</span>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.issuer}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Platform:</span>
                  <span className="text-xs text-muted-foreground font-mono">{cert.platform}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 card-glass rounded-2xl p-8 border border-white/5 text-center"
        >
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { label: "Certifications", value: "4+" },
              { label: "Learning Platforms", value: "3" },
              { label: "Industry Partners", value: "4" },
              { label: "Hours of Learning", value: "200+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient font-mono">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
