import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiSearch, FiTool, FiCheckCircle, FiSmile } from 'react-icons/fi'

const steps = [
  { icon: FiPhone, title: 'Customer Books Service', description: 'Contact us via call or WhatsApp' },
  { icon: FiMapPin, title: 'Technician Visit', description: 'Our expert visits your location' },
  { icon: FiSearch, title: 'Inspection & Diagnosis', description: 'Thorough problem identification' },
  { icon: FiTool, title: 'Repair & Replacement', description: 'Professional repair with quality parts' },
  { icon: FiCheckCircle, title: 'Final Testing', description: 'Complete quality check' },
  { icon: FiSmile, title: 'Customer Satisfaction', description: 'Happy and satisfied customer' },
]

function WorkProcess() {
  return (
    <section className="py-20 px-4">
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
            <span className="gradient-text">Work Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple and hassle-free repair process
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card rounded-xl p-6 inline-block"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-accent-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-8">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess