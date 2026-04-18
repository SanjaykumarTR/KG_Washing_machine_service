import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
]

function Footer() {
  return (
    <footer className="bg-[#080808] pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">KG</span>
              </div>
              <span className="text-xl font-bold gradient-text">Washing</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Expert washing machine repair services with 5+ years of experience. 
              Fast, reliable, and affordable repairs at your doorstep.
            </p>
            <p className="text-gray-500 text-sm">
              Owner: <span className="text-white">Suresh</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FiPhone className="w-4 h-4 text-accent-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FiMail className="w-4 h-4 text-accent-400" />
                <span>kgwashing@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FiMapPin className="w-4 h-4 text-accent-400" />
                <span>Your City, India</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} KG Washing Machine Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer