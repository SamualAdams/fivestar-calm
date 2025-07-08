import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                five* Violet Mini
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advanced UV technology and smart monitoring systems for portable toilet operators. Upgrade your fleet with proven ROI.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Louisiana, USA</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-violet-400" />
                  <a 
                    href="tel:225-238-7056"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    (225) 238-7056
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <a 
                    href="mailto:jon@fivestar.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    jon@fivestar.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a 
                  href="#roi" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  ROI Calculator
                </a>
                <a 
                  href="#industry-insights" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Industry Insights
                </a>
                <a 
                  href="#financing" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Financing Options
                </a>
                <a 
                  href="#faq" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} five* Violet Mini. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Innovative solutions for portable toilet operators
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer