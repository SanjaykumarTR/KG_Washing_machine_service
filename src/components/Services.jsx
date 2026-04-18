import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

const services = [
  {
    title: 'Fully Automatic Repair',
    description: 'Complete repair services for all fully automatic washing machines.',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
  },
  {
    title: 'Semi Automatic Repair',
    description: 'Expert repair for semi-automatic washing machines.',
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01b5d25?w=400&h=300&fit=crop',
  },
  {
    title: 'Front Load Repair',
    description: 'Specialized front load washing machine repair services.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    title: 'Top Load Repair',
    description: 'Professional top load washing machine repair.',
    image: 'https://images.unsplash.com/photo-1595939968004-8212d775859e?w=400&h=300&fit=crop',
  },
  {
    title: 'Drum Repair & Replacement',
    description: 'Drum inspection, repair and replacement services.',
    image: 'https://images.unsplash.com/photo-1563302118-d2a018632b19?w=400&h=300&fit=crop',
  },
  {
    title: 'Water Leakage Fix',
    description: 'Quick diagnosis and fix for water leakage issues.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
  },
  {
    title: 'Motor Repair',
    description: 'Complete motor repair and replacement services.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  },
  {
    title: 'PCB Board Repair',
    description: 'Electronic circuit board repair and replacement.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
  },
  {
    title: 'Noise & Vibration Fix',
    description: 'Diagnosis and fix for unusual noise and vibration.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
  },
  {
    title: 'Installation Services',
    description: 'Professional installation and uninstallation.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
  },
  {
    title: 'Maintenance & Cleaning',
    description: 'Regular maintenance and deep cleaning services.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695ccade2?w=400&h=300&fit=crop',
  },
]

function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive repair services for all types and brands of washing machines
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-accent-400 text-sm font-medium group-hover:text-accent-300 transition-colors duration-300"
                >
                  <span>Book Now</span>
                  <FiChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services