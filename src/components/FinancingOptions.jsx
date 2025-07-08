import React from 'react'
import { CheckCircle, TrendingUp, Calculator } from 'lucide-react'

const FinancingOptions = () => {
  const financingBenefits = [
    "Spread investment over 12-60 months",
    "Match monthly payments to operational savings",
    "Preserve working capital for other investments",
    "Start seeing ROI immediately while financing",
    "Flexible terms based on fleet size and credit"
  ]

  const financingTiers = [
    {
      term: "12 months",
      rate: "6.9%",
      description: "Quick payoff with lowest total cost",
      ideal: "Strong cash flow, want to minimize interest"
    },
    {
      term: "24 months", 
      rate: "7.4%",
      description: "Balance of payment size and total cost",
      ideal: "Most popular option for medium fleets"
    },
    {
      term: "36 months",
      rate: "8.2%",
      description: "Lower monthly payments, more flexibility",
      ideal: "Larger fleets, maximize cash flow"
    }
  ]

  return (
    <section id="financing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-primary">
            Financing Options
          </h2>
          <p className="text-lg text-gray-secondary max-w-3xl mx-auto">
            Equipment financing available to help spread the investment and align payments with your operational savings
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Financing Benefits */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-violet-primary" />
              <h3 className="text-xl font-semibold text-gray-primary">
                Why Finance Your Upgrade?
              </h3>
            </div>
            
            <div className="space-y-4">
              {financingBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-secondary">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-light rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-gray-primary mb-3">
                Smart Financial Strategy
              </h4>
              <p className="text-gray-secondary text-sm leading-relaxed">
                With typical operational savings of $200-400 per unit per month, financing allows you to upgrade your entire fleet while maintaining positive cash flow from day one.
              </p>
            </div>
          </div>

          {/* Financing Tiers */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-violet-primary" />
              <h3 className="text-xl font-semibold text-gray-primary">
                Financing Terms Available
              </h3>
            </div>

            <div className="space-y-4">
              {financingTiers.map((tier, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-primary text-lg">
                        {tier.term}
                      </h4>
                      <p className="text-violet-primary font-medium">
                        {tier.rate} APR*
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Starting at</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-secondary text-sm mb-2">
                    {tier.description}
                  </p>
                  
                  <div className="bg-white rounded-lg p-3 mt-3">
                    <p className="text-xs text-gray-600">
                      <strong>Ideal for:</strong> {tier.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financing Calculator CTA */}
        <div className="bg-violet-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            See Your Financing Options
          </h3>
          <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
            Use our calculator above to model different financing terms and see how monthly payments compare to your operational savings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Calculate Your Financing
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-primary transition-colors duration-200">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Financing Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto">
            *APR rates shown are estimates and subject to credit approval. Actual rates may vary based on creditworthiness, term length, and equipment value. Financing provided through qualified third-party lenders. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinancingOptions