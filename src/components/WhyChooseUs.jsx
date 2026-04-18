import { motion } from 'framer-motion'
import { FiClock, FiCheckCircle, FiPackage, FiMapPin, FiDollarSign, FiShield } from 'react-icons/fi'

const features = [
  { icon: FiClock, title: '5+ Years Experience', description: 'Years of professional expertise' },
  { icon: FiCheckCircle, title: 'Verified Technician', description: 'Certified and skilled professionals' },
  { icon: FiPackage, title: 'Genuine Spare Parts', description: 'Quality authentic parts used' },
  { icon: FiMapPin, title: 'Fast Doorstep Service', description: 'Service at your location' },
  { icon: FiDollarSign, title: 'Affordable Cost', description: 'Best market rates' },
  { icon: FiShield, title: 'Warranty on Repairs', description: 'Guaranteed service' },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Why </span>
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the difference with our premium repair services
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs