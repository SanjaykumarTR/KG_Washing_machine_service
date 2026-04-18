import { motion } from 'framer-motion'
import { FiAward, FiUser, FiCheckCircle, FiThumbsUp } from 'react-icons/fi'

const features = [
  { icon: FiCheckCircle, title: 'Quality Service', description: 'Professional repair with genuine parts' },
  { icon: FiThumbsUp, title: 'Customer Satisfaction', description: 'Hundreds of happy customers' },
  { icon: FiAward, title: 'Expert Handling', description: 'All brands & models' },
]

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">KG Washing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your trusted partner for professional washing machine repair services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=500&fit=crop"
                  alt="Technician at work"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 glass rounded-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <FiUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Suresh</p>
                    <p className="text-gray-400 text-sm">Owner & Technician</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Meet <span className="gradient-text">Suresh</span> - Your Expert Technician
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                With over 5+ years of professional experience in washing machine repair, 
                Suresh has built a reputation for providing fast, reliable, and affordable repair services. 
                Our mission is to deliver quality repairs with genuine spare parts and ensure 
                complete customer satisfaction.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We handle all types of washing machines - fully automatic, semi-automatic, 
                front load, and top load models from all major brands.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-xl p-4 text-center hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About