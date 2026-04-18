import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: 'How fast is the service?',
    answer: 'We aim to provide same-day service for most repairs. Our technician will visit your location within 24 hours of booking.',
  },
  {
    question: 'Do you provide warranty?',
    answer: 'Yes, we provide warranty on our repairs. The warranty period varies depending on the type of repair and parts used.',
  },
  {
    question: 'Do you repair all brands?',
    answer: 'Yes, we repair all major brands including Samsung, LG, Whirlpool, IFB, Godrej, Panasonic, and many more.',
  },
  {
    question: 'What is the minimum service charge?',
    answer: 'Our basic service starts at ₹299. The final price depends on the issue and spare parts required.',
  },
  {
    question: 'Can I book through WhatsApp?',
    answer: 'Yes! You can book our services through WhatsApp. Simply message us at +91 98765 43210.',
  },
  {
    question: 'Do you provide doorstep service?',
    answer: 'Yes, we provide doorstep repair service at your location. No need to transport your washing machine.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Frequently </span>
            <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <FiMinus className="w-5 h-5 text-accent-400 flex-shrink-0" />
                ) : (
                  <FiPlus className="w-5 h-5 text-accent-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ