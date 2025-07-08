import { useState, useEffect } from 'react'

const useROICalculator = () => {
  const [inputs, setInputs] = useState({
    fleetSize: 50,
    unitPrice: 500,
    timePerService: 10,
    disinfectTime: 3,
    hourlyRate: 25,
    cleaningsWeek: 2,
    emergencyCalls: 0.5,
    emergencyMultiplier: 2.0,
    premiumUpcharge: 20,
    financingTerm: 24
  })

  const [isAdvanced, setIsAdvanced] = useState(false)
  const [results, setResults] = useState({})

  const MONITORING_SAVINGS_PERCENTAGE = 0.20
  const EMERGENCY_PREVENTION_RATE = 0.85

  const calculateROI = () => {
    const {
      fleetSize, unitPrice, timePerService, disinfectTime, hourlyRate,
      cleaningsWeek, emergencyCalls, emergencyMultiplier, premiumUpcharge,
      financingTerm
    } = inputs

    // Current Annual Labor Cost
    const weeklyLaborHoursPerUnit = (timePerService / 60) * cleaningsWeek
    const weeklyLaborCostPerUnit = weeklyLaborHoursPerUnit * hourlyRate
    const totalWeeklyLaborCost = weeklyLaborCostPerUnit * fleetSize
    const currentAnnualLaborCost = totalWeeklyLaborCost * 52

    // Current Annual Emergency Cost
    const emergencyServiceTime = timePerService
    const emergencyHourlyRate = hourlyRate * emergencyMultiplier
    const emergencyCallCost = (emergencyServiceTime / 60) * emergencyHourlyRate
    const currentAnnualEmergencyCost = emergencyCalls * fleetSize * 12 * emergencyCallCost

    // Disinfection Savings
    const disinfectionWeeklyHours = (disinfectTime / 60) * cleaningsWeek * fleetSize
    const disinfectionWeeklyCost = disinfectionWeeklyHours * hourlyRate
    const annualDisinfectionSavings = disinfectionWeeklyCost * 52

    // Smart Monitoring Savings
    const baseServiceTime = timePerService - disinfectTime
    const monitoringTimeReduction = baseServiceTime * MONITORING_SAVINGS_PERCENTAGE
    const monitoringWeeklyHours = (monitoringTimeReduction / 60) * cleaningsWeek * fleetSize
    const monitoringWeeklyCost = monitoringWeeklyHours * hourlyRate
    const annualMonitoringSavings = monitoringWeeklyCost * 52

    // Emergency Prevention Savings
    const annualEmergencyPreventionSavings = currentAnnualEmergencyCost * EMERGENCY_PREVENTION_RATE

    // Premium Revenue
    const monthlyPremiumRevenue = fleetSize * premiumUpcharge
    const annualPremiumRevenue = monthlyPremiumRevenue * 12

    // Total Benefits
    const totalAnnualBenefit = annualDisinfectionSavings + annualMonitoringSavings + annualEmergencyPreventionSavings + annualPremiumRevenue
    const totalLaborSavings = annualDisinfectionSavings + annualMonitoringSavings

    // Investment Analysis
    const totalInvestment = fleetSize * unitPrice
    const annualBenefitPerUnit = totalAnnualBenefit / fleetSize
    const monthlyBenefitPerUnit = annualBenefitPerUnit / 12
    const paybackMonths = totalInvestment / (totalAnnualBenefit / 12)
    const annualRoiPercentage = (totalAnnualBenefit / totalInvestment) * 100

    // Monthly values for chart
    const totalMonthlySavings = (annualDisinfectionSavings + annualMonitoringSavings) / 12
    const monthlyFinancingCost = financingTerm === 0 ? 0 : totalInvestment / financingTerm

    return {
      currentAnnualLaborCost,
      currentAnnualEmergencyCost,
      annualDisinfectionSavings,
      annualMonitoringSavings,
      annualEmergencyPreventionSavings,
      annualPremiumRevenue,
      totalAnnualBenefit,
      totalLaborSavings,
      totalInvestment,
      annualBenefitPerUnit,
      monthlyBenefitPerUnit,
      paybackMonths,
      annualRoiPercentage,
      totalMonthlySavings,
      monthlyPremiumRevenue,
      monthlyFinancingCost
    }
  }

  useEffect(() => {
    setResults(calculateROI())
  }, [inputs])

  const updateInput = (key, value) => {
    setInputs(prev => ({
      ...prev,
      [key]: value === '' ? '' : parseFloat(value) || 0
    }))
  }

  const formatPayback = (months) => {
    if (months < 1) {
      const weeks = months * 4.33
      return `${weeks.toFixed(1)} weeks`
    } else if (months < 12) {
      return `${months.toFixed(1)} months`
    } else {
      const years = months / 12
      return `${years.toFixed(1)} years`
    }
  }

  return {
    inputs,
    results,
    isAdvanced,
    setIsAdvanced,
    updateInput,
    formatPayback
  }
}

export default useROICalculator