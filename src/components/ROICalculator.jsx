import React, { useState } from 'react'
import { Info, Settings, BarChart3, ChevronDown, ChevronUp } from 'lucide-react'
import useROICalculator from '../hooks/useROICalculator'
import ChartRenderer from './ui/ChartRenderer'

const ROICalculator = () => {
  const { inputs, results, isAdvanced, setIsAdvanced, updateInput, formatPayback } = useROICalculator()
  const [showChart, setShowChart] = useState(false)

  const InputField = ({ 
    label, 
    value, 
    onChange, 
    min = 0, 
    max, 
    tooltip, 
    type = "number",
    id
  }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {tooltip && (
          <div className="group relative">
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none w-64 z-10">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-primary focus:border-transparent"
      />
    </div>
  )

  return (
    <section id="roi" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-primary">
            ROI Calculator
          </h2>
          <p className="text-lg text-gray-secondary max-w-3xl mx-auto">
            Calculate your return on investment with Violet Mini. Adjust the parameters below to see how the upgrade impacts your operation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Inputs */}
            <div className="p-8 border-r border-gray-200">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Simple Mode Inputs */}
                  <InputField
                    label="Number of units in your fleet"
                    value={inputs.fleetSize}
                    onChange={(value) => updateInput('fleetSize', value)}
                    min={1}
                    tooltip="Total portable toilets in your fleet that would be equipped with Violet Mini monitoring sensors"
                    id="fleet-size"
                  />
                  
                  <InputField
                    label="Time per service (minutes)"
                    value={inputs.timePerService}
                    onChange={(value) => updateInput('timePerService', value)}
                    min={1}
                    tooltip="Average time your crew spends servicing each unit, including pumping, cleaning, and restocking"
                    id="time-per-service"
                  />
                  
                  <InputField
                    label="Labor rate per hour ($)"
                    value={inputs.hourlyRate}
                    onChange={(value) => updateInput('hourlyRate', value)}
                    min={1}
                    tooltip="Fully loaded hourly cost including wages, benefits, equipment, and vehicle costs"
                    id="hourly-rate"
                  />
                  
                  <InputField
                    label="Cleanings per week"
                    value={inputs.cleaningsWeek}
                    onChange={(value) => updateInput('cleaningsWeek', value)}
                    min={1}
                    max={7}
                    tooltip="How many times per week each unit gets serviced on average"
                    id="cleanings-week"
                  />
                  
                  <InputField
                    label="Optional service premium ($)"
                    value={inputs.premiumUpcharge}
                    onChange={(value) => updateInput('premiumUpcharge', value)}
                    min={0}
                    tooltip="Monthly premium you could charge for upgraded service (UV disinfection + smart monitoring)"
                    id="premium-upcharge"
                  />

                  {/* Advanced Toggle */}
                  <div className="md:col-span-2">
                    <button
                      onClick={() => setIsAdvanced(!isAdvanced)}
                      className="flex items-center gap-2 text-violet-primary hover:text-violet-secondary font-medium transition-colors duration-200"
                    >
                      <Settings className="w-4 h-4" />
                      {isAdvanced ? 'Simple Mode' : 'Advanced Options'}
                    </button>
                  </div>
                </div>

                {/* Advanced Mode Inputs */}
                {isAdvanced && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <InputField
                      label="Violet Mini unit price ($)"
                      value={inputs.unitPrice}
                      onChange={(value) => updateInput('unitPrice', value)}
                      min={100}
                      tooltip="Cost per Violet Mini device. Pricing may vary based on fleet size and custom requirements"
                      id="unit-price"
                    />
                    
                    <InputField
                      label="Financing term (months)"
                      value={inputs.financingTerm}
                      onChange={(value) => updateInput('financingTerm', value)}
                      min={0}
                      max={60}
                      tooltip="Financing term for equipment purchase. Set to 0 for lump sum payment in Month 1"
                      id="financing-term"
                    />
                    
                    <InputField
                      label="Time disinfecting (minutes)"
                      value={inputs.disinfectTime}
                      onChange={(value) => updateInput('disinfectTime', value)}
                      min={0}
                      tooltip="Minutes currently spent manually scrubbing and disinfecting each unit interior"
                      id="disinfect-time"
                    />
                    
                    <InputField
                      label="Emergency calls per unit/month"
                      value={inputs.emergencyCalls}
                      onChange={(value) => updateInput('emergencyCalls', value)}
                      min={0}
                      tooltip="Average emergency service calls per unit per month (overflows, complaints, etc.)"
                      id="emergency-calls"
                    />
                    
                    <InputField
                      label="Emergency call cost multiplier"
                      value={inputs.emergencyMultiplier}
                      onChange={(value) => updateInput('emergencyMultiplier', value)}
                      min={1}
                      tooltip="How much more expensive emergency calls are vs. regular service (typically 2-3x due to route disruption)"
                      id="emergency-multiplier"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="p-8 bg-gradient-to-br from-violet-50 to-white">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-primary mb-6">Your ROI Analysis</h3>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-violet-primary">
                      ${Math.round(results.annualBenefitPerUnit || 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Benefit Per Unit</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-violet-primary">
                      ${Math.round(results.monthlyBenefitPerUnit || 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Benefit Per Unit</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-primary">
                      {formatPayback(results.paybackMonths || 0)}
                    </div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-primary">
                      {Math.round(results.annualRoiPercentage || 0)}%
                    </div>
                    <div className="text-sm text-gray-600">Annual ROI</div>
                  </div>
                </div>

                {/* Investment Summary */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Annual Benefit</span>
                      <span className="font-semibold text-lg">
                        ${Math.round(results.totalAnnualBenefit || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Investment Required</span>
                      <span className="font-semibold text-lg">
                        ${Math.round(results.totalInvestment || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Labor Savings</span>
                      <span className="font-semibold text-lg">
                        ${Math.round(results.totalLaborSavings || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  {/* Chart Toggle Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setShowChart(!showChart)}
                      className="w-full flex items-center justify-center gap-2 bg-violet-primary hover:bg-violet-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      <BarChart3 className="w-5 h-5" />
                      {showChart ? 'Hide Cash Flow Chart' : 'Show Cash Flow Chart'}
                      {showChart ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Chart Section */}
        {showChart && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-primary">
                Monthly Value vs. Financing Cost
              </h3>
              <p className="text-gray-secondary max-w-4xl mx-auto">
                This chart shows how your monthly savings and revenue stack up against financing costs. 
                Green bars represent guaranteed cost savings, purple shows potential premium revenue.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700 text-center">
                This chart shows how <strong className="text-violet-primary">monthly savings and revenue stack up</strong> against your financing costs. The green bars represent guaranteed cost savings from operational efficiency. Purple shows potential premium revenue from upgraded service.
              </p>
            </div>
            
            <div className="relative mb-6">
              <ChartRenderer inputs={inputs} results={results} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-primary rounded"></div>
                <span className="text-sm text-gray-600">Monthly Cost Savings (guaranteed)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-violet-primary rounded"></div>
                <span className="text-sm text-gray-600">Monthly Premium Revenue (potential)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-red-500"></div>
                <span className="text-sm text-gray-600">Monthly Financing Cost</span>
              </div>
            </div>
            
            <div className="bg-green-primary/10 rounded-lg p-6 text-center">
              <div className="text-sm font-semibold text-green-primary mb-2">Key Insight</div>
              <div className="text-gray-700">
                Cost savings alone provide significant financing coverage, making premium revenue pure profit margin improvement.
              </div>
            </div>
          </div>
        )}

        {/* Conservative Investment Analysis */}
        {/* <div className="mt-12 bg-violet-100 rounded-xl p-8">
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold text-gray-primary">
              Conservative Investment Analysis
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-primary mb-2">
                  ${inputs.unitPrice}
                </div>
                <div className="text-sm text-gray-600">
                  Violet Upgrade Investment
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-primary mb-2">
                  ${Math.round((results.totalLaborSavings || 0) / 12).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  Monthly Operational Savings
                </div>
              </div>
              
              <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-gray-primary mb-2">
                  {formatPayback(results.paybackMonths || 0)}
                </div>
                <div className="text-sm text-gray-600">
                  Typical Payback Period
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ROICalculator