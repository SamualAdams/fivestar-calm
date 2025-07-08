import React from 'react'
import { Phone, Mail } from 'lucide-react'

const NextSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description: "We'll meet to discuss your routes, ops, and goals."
    },
    {
      number: "2",
      title: "Proposal", 
      description: "Receive a tailored proposal with pricing and timeline."
    },
    {
      number: "3",
      title: "Installation",
      description: "Schedule installation and training at your convenience."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-primary">
            Next Steps to Upgrade Your Fleet
          </h2>
          <p className="text-lg text-gray-secondary max-w-3xl mx-auto">
            Simple process to get your fleet upgraded and operational
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 max-w-sm mx-auto bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-violet-600 font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-primary mt-4">
                {step.title}
              </h3>
              <p className="text-gray-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-primary">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call:</span>
              <a 
                href="tel:225-238-7056" 
                className="text-violet-primary hover:text-violet-secondary transition-colors duration-200"
              >
                (225) 238-7056
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-primary">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Email:</span>
              <a 
                href="mailto:jon@fivestar.com"
                className="text-violet-primary hover:text-violet-secondary transition-colors duration-200"
              >
                jon@fivestar.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NextSteps