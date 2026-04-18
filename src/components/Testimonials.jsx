import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    text: 'Very fast service and affordable price. Highly recommended! The technician was very professional and fixed my washing machine within hours.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    text: 'Suresh sir is very professional. My washing machine works perfectly now. Great service with warranty support.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    text: 'Same day repair done, great support and warranty provided. Very satisfied with the service.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    text: 'Excellent service! The team was punctual and fixed all issues. Will definitely recommend to others.',
    rating: 5,
  },
  {
    name: 'Vijay Singh',
    text: 'Quality repair with genuine parts. My washing machine is working like new. Thank you KG Washing!',
    rating: 5,
  },
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Customer </span>
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What our customers say about us
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 sm:p-12"
            >
              <div className="absolute top-6 left-6 text-primary-500/30 text-6xl font-serif">
                "
              </div>
              
              <div className="relative">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold">
                      {testimonials[currentIndex].name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                      <div className="flex space-x-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            >
              <FiChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-accent-500' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
            >
              <FiChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials