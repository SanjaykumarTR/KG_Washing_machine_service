import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle, FiSend } from 'react-icons/fi'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch for instant repair services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-6">Book a Service</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    required
                  >
                    <option value="" className="bg-[#0a0a0a]">Select Issue</option>
                    <option value="repair" className="bg-[#0a0a0a]">Repair</option>
                    <option value="maintenance" className="bg-[#0a0a0a]">Maintenance</option>
                    <option value="installation" className="bg-[#0a0a0a]">Installation</option>
                    <option value="other" className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 py-4 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                >
                  <FiSend className="w-5 h-5" />
                  <span>Submit Request</span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white font-semibold text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <FiPhone className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Call Us</p>
                    <p className="text-white font-medium">+91 98765 43210</p>
                  </div>
                </a>
                
                <a
                  href="mailto:kgwashing@gmail.com"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <FiMail className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email Us</p>
                    <p className="text-white font-medium">kgwashing@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Address</p>
                    <p className="text-white font-medium">Service Center, Your City, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Working Hours</p>
                    <p className="text-white font-medium">9 AM - 8 PM (All Days)</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-3 glass-card rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
            >
              <FiMessageCircle className="w-8 h-8 text-green-400" />
              <span className="text-white font-semibold">Chat on WhatsApp</span>
            </motion.a>

            <div className="glass-card rounded-2xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501900.0!2d77.0!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzE4LjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact