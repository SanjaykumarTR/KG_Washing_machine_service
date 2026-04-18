import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'

const pricingPlans = [
  {
    name: 'Basic Service',
    price: '₹299',
    description: 'Cleaning & Checkup',
    features: [
      { text: 'Basic inspection', included: true },
      { text: 'Cleaning service', included: true },
      { text: 'Water check', included: true },
      { text: 'Part replacement', included: false },
      { text: 'Warranty', included: false },
    ],
    popular: false,
  },
  {
    name: 'Standard Repair',
    price: '₹499',
    description: 'Parts check + Repair',
    features: [
      { text: 'Full inspection', included: true },
      { text: 'Diagnosis', included: true },
      { text: 'Part check', included: true },
      { text: 'Minor repair', included: true },
      { text: 'Warranty', included: false },
    ],
    popular: true,
  },
  {
    name: 'Premium Repair',
    price: '₹999',
    description: 'Full service + warranty',
    features: [
      { text: 'Full inspection', included: true },
      { text: 'Complete repair', included: true },
      { text: 'Part replacement', included: true },
      { text: 'Testing & QA', included: true },
      { text: 'Warranty', included: true },
    ],
    popular: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-[#0d0d0d]">
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
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular 
                  ? 'gradient-border shadow-lg shadow-primary-500/30' 
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      {feature.included ? (
                        <FiCheck className="w-5 h-5 text-green-400" />
                      ) : (
                        <FiX className="w-5 h-5 text-gray-600" />
                      )}
                      <span className={feature.included ? 'text-white text-sm' : 'text-gray-500 text-sm'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/30'
                      : 'glass text-white hover:bg-white/10'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Final price depends on issue and spare parts
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing