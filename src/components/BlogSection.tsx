import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    title: "10 AI Trends That Will Shape 2026",
    excerpt: "Discover the latest developments in artificial intelligence and how they're transforming industries worldwide.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    category: "AI & ML",
    date: "Feb 8, 2026",
    readTime: "5 min read",
    author: "Dr. Amit Kumar",
    trending: true,
  },
  {
    title: "Full Stack Development: Complete Roadmap",
    excerpt: "A comprehensive guide to becoming a full stack developer in 2026 with the right skills and technologies.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    category: "Web Dev",
    date: "Feb 6, 2026",
    readTime: "8 min read",
    author: "Sarah Johnson",
    trending: false,
  },
  {
    title: "Microservices Architecture Best Practices",
    excerpt: "Learn how to design, build, and deploy scalable microservices that power modern applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "Backend",
    date: "Feb 4, 2026",
    readTime: "6 min read",
    author: "Vikram Patel",
    trending: true,
  },
  {
    title: "UI/UX Design Principles for 2026",
    excerpt: "Master the art of creating beautiful, intuitive interfaces that users love with modern design principles.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Design",
    date: "Feb 2, 2026",
    readTime: "7 min read",
    author: "Maya Chen",
    trending: false,
  },
  {
    title: "Getting Started with React Native",
    excerpt: "Build your first cross-platform mobile app with React Native and deploy it to iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    category: "Mobile",
    date: "Jan 30, 2026",
    readTime: "10 min read",
    author: "Sarah Johnson",
    trending: false,
  },
  {
    title: "DevOps Culture: A Complete Guide",
    excerpt: "Transform your development workflow with DevOps practices, tools, and automation strategies.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    category: "DevOps",
    date: "Jan 28, 2026",
    readTime: "9 min read",
    author: "Vikram Patel",
    trending: true,
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Background */}
      <div className="absolute top-0 right-0 sm:right-1/4 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-0 left-0 sm:left-1/4 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full bg-accent/5 blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Latest Insights
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            From Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Stay updated with the latest trends, tutorials, and insights from industry experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold">
                  {post.category}
                </div>

                {/* Trending badge */}
                {post.trending && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1">
                    <TrendingUp size={10} className="sm:hidden" />
                    <TrendingUp size={12} className="hidden sm:block" />
                    Trending
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                {/* Meta info */}
                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} className="sm:hidden" />
                    <Calendar size={12} className="hidden sm:block" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} className="sm:hidden" />
                    <Clock size={12} className="hidden sm:block" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    By {post.author}
                  </span>
                  <button className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:gap-2 transition-all group/btn">
                    Read More
                    <ArrowRight size={12} className="sm:hidden" />
                    <ArrowRight size={14} className="hidden sm:block" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm sm:text-base"
          >
            View All Articles
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={18} className="hidden sm:block" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
