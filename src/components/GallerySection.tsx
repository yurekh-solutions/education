import { motion } from "framer-motion";
import { Users, Code, Award, Rocket } from "lucide-react";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    title: "Collaborative Learning",
    description: "Students working together on projects",
    icon: Users,
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    title: "Interactive Workshops",
    description: "Hands-on coding sessions with mentors",
    icon: Code,
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    title: "Hackathons & Events",
    description: "Regular competitions and networking events",
    icon: Rocket,
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    title: "Graduation Ceremonies",
    description: "Celebrating success with our graduates",
    icon: Award,
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Team Projects",
    description: "Building real-world applications together",
    icon: Users,
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    title: "Modern Classrooms",
    description: "State-of-the-art learning facilities",
    icon: Code,
  },
];

const GallerySection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Campus Life
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Experience Our <span className="gradient-text">Learning Environment</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Get a glimpse of our vibrant community, modern facilities, and collaborative learning spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-56 sm:h-72 lg:h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {[
            { label: "Smart Classrooms", value: "25+" },
            { label: "Lab Facilities", value: "10+" },
            { label: "Study Areas", value: "15+" },
            { label: "Events/Year", value: "50+" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 text-center hover:border-primary/30 transition-all"
            >
              <div className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
