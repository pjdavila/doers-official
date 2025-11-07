import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
import Reveal from "@/components/animations/reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    position: "CEO, WAPA TV",
    company: "WAPA TV",
    text: "DOERS transformed our digital presence completely. Their OTT platform solution exceeded all our expectations and delivered measurable results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Carlos Rodríguez",
    position: "CTO, PRTicket",
    company: "PRTicket",
    text: "The team at DOERS is exceptional. They built our ticketing platform with precision, delivering a scalable solution that handles thousands of transactions daily.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    name: "Ana Martínez",
    position: "Marketing Director, TeleOnce",
    company: "TeleOnce",
    text: "Working with DOERS was a game-changer. Their attention to detail and commitment to excellence is unmatched in the industry.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    name: "Roberto Sánchez",
    position: "VP Digital, Rums of Puerto Rico",
    company: "Rums of Puerto Rico",
    text: "DOERS delivered an immersive digital experience that perfectly captures our brand. The results speak for themselves - engagement is up 300%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <motion.div 
          className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-purple opacity-5 blur-[120px]"
          animate={{ 
            x: [-20, 20, -20],
            y: [-20, 20, -20],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-6xl mb-4">
              CLIENT <span className="text-orange">TESTIMONIALS</span>
            </h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Glass morphism card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-[0.03] backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-10 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-orange/5 pointer-events-none"></div>
                
                {/* Quote icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={80} className="text-white" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star size={20} className="fill-orange text-orange" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="font-space text-xl md:text-2xl text-white mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-space font-bold text-lg text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="font-space text-sm text-gray">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="font-space text-xs text-purple">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-orange w-8"
                      : "bg-white bg-opacity-20 hover:bg-opacity-40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Client logos */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {["WAPA TV", "TeleOnce", "PRTicket", "Jeep & RAM"].map((client, index) => (
              <motion.div
                key={client}
                className="text-center font-bebas text-2xl text-white text-opacity-30 hover:text-opacity-60 transition-all"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.3, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {client}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
