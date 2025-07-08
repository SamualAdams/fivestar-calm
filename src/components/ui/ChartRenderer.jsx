import React, { useEffect, useRef } from 'react'

const ChartRenderer = ({ inputs, results, className = '' }) => {
  const canvasRef = useRef(null)

  const createChart = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    // Set canvas size for proper rendering
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const width = rect.width
    const height = rect.height

    // Chart settings
    const margin = { top: 40, right: 40, bottom: 60, left: 80 }
    const chartWidth = width - margin.left - margin.right
    const chartHeight = height - margin.top - margin.bottom

    const maxMonths = width < 768 ? 24 : 36

    // Calculate monthly values
    const totalMonthlySavings = results.totalMonthlySavings || 0
    const monthlyPremiumRevenue = results.monthlyPremiumRevenue || 0
    const monthlyFinancingCost = results.monthlyFinancingCost || 0
    const totalInvestment = results.totalInvestment || 0

    // Generate data
    const months = []
    const financingData = []
    const savingsData = []
    const revenueData = []

    for (let i = 0; i <= maxMonths; i++) {
      months.push(i)
      
      if (inputs.financingTerm === 0) {
        financingData.push(i === 1 ? totalInvestment : 0)
      } else {
        financingData.push(i <= inputs.financingTerm ? monthlyFinancingCost : 0)
      }
      
      savingsData.push(totalMonthlySavings)
      revenueData.push(monthlyPremiumRevenue)
    }

    // Find break-even point
    let breakevenMonth = 0
    const totalMonthlyBenefit = totalMonthlySavings + monthlyPremiumRevenue
    for (let i = 1; i <= maxMonths; i++) {
      const financing = inputs.financingTerm === 0 ? (i === 1 ? totalInvestment : 0) : 
                       (i <= inputs.financingTerm ? monthlyFinancingCost : 0)
      if (totalMonthlyBenefit >= financing && breakevenMonth === 0) {
        breakevenMonth = i
        break
      }
    }

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate scales
    const maxValue = Math.max(
      Math.max(...financingData),
      totalMonthlyBenefit,
      monthlyFinancingCost
    )
    const paddedMaxValue = maxValue * 1.1
    
    const barWidth = chartWidth / (maxMonths + 1)
    const xScale = (month) => margin.left + (month / maxMonths) * chartWidth
    const yScale = (value) => margin.top + chartHeight - ((value / paddedMaxValue) * chartHeight)

    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 1

    // Vertical grid lines
    for (let i = 0; i <= maxMonths; i += 6) {
      const x = xScale(i)
      ctx.beginPath()
      ctx.moveTo(x, margin.top)
      ctx.lineTo(x, margin.top + chartHeight)
      ctx.stroke()
    }

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const value = (paddedMaxValue / 5) * i
      const y = yScale(value)
      ctx.beginPath()
      ctx.moveTo(margin.left, y)
      ctx.lineTo(margin.left + chartWidth, y)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = '#374151'
    ctx.lineWidth = 2

    // X-axis
    ctx.beginPath()
    ctx.moveTo(margin.left, margin.top + chartHeight)
    ctx.lineTo(margin.left + chartWidth, margin.top + chartHeight)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(margin.left, margin.top)
    ctx.lineTo(margin.left, margin.top + chartHeight)
    ctx.stroke()

    // Draw stacked bars
    for (let i = 1; i <= maxMonths; i++) {
      const x = xScale(i) - barWidth / 2
      const baseY = yScale(0)
      
      // Bottom layer: Cost Savings (green)
      const savingsHeight = (savingsData[i] / paddedMaxValue) * chartHeight
      ctx.fillStyle = '#10b981'
      ctx.fillRect(x, baseY - savingsHeight, barWidth * 0.8, savingsHeight)
      
      // Top layer: Premium Revenue (purple)
      const revenueHeight = (revenueData[i] / paddedMaxValue) * chartHeight
      ctx.fillStyle = '#7c3aed'
      ctx.fillRect(x, baseY - savingsHeight - revenueHeight, barWidth * 0.8, revenueHeight)
    }

    // Draw financing cost line (red)
    ctx.strokeStyle = '#ef4444'
    ctx.lineWidth = 3
    ctx.beginPath()

    for (let i = 0; i <= maxMonths; i++) {
      const x = xScale(i)
      const y = yScale(financingData[i])
      
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw break-even marker
    if (breakevenMonth > 0 && breakevenMonth <= maxMonths) {
      const x = xScale(breakevenMonth)
      ctx.strokeStyle = '#f59e0b'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(x, margin.top)
      ctx.lineTo(x, margin.top + chartHeight)
      ctx.stroke()
      ctx.setLineDash([])
      
      // Break-even label
      ctx.fillStyle = '#f59e0b'
      ctx.font = 'bold 12px Poppins'
      ctx.textAlign = 'center'
      ctx.fillText('Positive', x, margin.top - 20)
      ctx.fillText('Cash Flow', x, margin.top - 8)
    }

    // Draw axis labels
    ctx.fillStyle = '#374151'
    ctx.font = '12px Poppins'
    ctx.textAlign = 'center'

    // X-axis labels
    for (let i = 0; i <= maxMonths; i += 6) {
      const x = xScale(i)
      const y = margin.top + chartHeight + 20
      ctx.fillText(i.toString(), x, y)
    }

    // Y-axis labels
    ctx.textAlign = 'right'
    for (let i = 0; i <= 5; i++) {
      const value = (paddedMaxValue / 5) * i
      const x = margin.left - 10
      const y = yScale(value) + 4
      ctx.fillText('$' + Math.round(value).toLocaleString(), x, y)
    }

    // Axis titles
    ctx.textAlign = 'center'
    ctx.font = '14px Poppins'
    
    // X-axis title
    ctx.fillText('Months', margin.left + chartWidth / 2, height - 10)
    
    // Y-axis title
    ctx.save()
    ctx.translate(20, margin.top + chartHeight / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.fillText('Monthly Value ($)', 0, 0)
    ctx.restore()
  }

  useEffect(() => {
    createChart()
  }, [inputs, results])

  useEffect(() => {
    const handleResize = () => {
      setTimeout(createChart, 100)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-96 ${className}`}
      style={{ height: '400px' }}
    />
  )
}

export default ChartRenderer