import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    color: "from-primary/20 to-primary/5",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Backend",
    color: "from-accent/20 to-accent/5",
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
  },
  {
    category: "Database",
    color: "from-primary/20 to-accent/10",
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "AI/ML",
    color: "from-accent/20 to-primary/10",
    technologies: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    category: "DevOps",
    color: "from-primary/10 to-accent/20",
    technologies: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
  {
    category: "Mobile",
    color: "from-accent/10 to-primary/20",
    technologies: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Technology Stack
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Master <span className="gradient-text">Industry-Leading</span> Technologies
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Learn the most in-demand technologies used by top tech companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all"
            >
              {/* Category header */}
              <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + techIndex * 0.05 }}
                      className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 px-4 sm:px-0">
            And many more cutting-edge technologies to keep you ahead of the curve
          </p>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm sm:text-base"
          >
            Explore Full Curriculum →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
