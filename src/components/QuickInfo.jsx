import { motion } from 'framer-motion'
import { FiClock, FiMapPin, FiDollarSign, FiPackage, FiShield } from 'react-icons/fi'

const quickInfoItems = [
  { icon: FiClock, title: 'Same Day Service', description: 'Quick turnaround' },
  { icon: FiMapPin, title: 'Doorstep Repair', description: 'At your location' },
  { icon: FiDollarSign, title: 'Affordable Pricing', description: 'Best rates' },
  { icon: FiPackage, title: 'Genuine Spare Parts', description: 'Quality assured' },
  { icon: FiShield, title: 'Warranty Support', description: 'On repairs' },
]

function QuickInfo() {
  return (
    <section className="relative -mt-12 z-10 pb-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickInfoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-3 group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default QuickInfo