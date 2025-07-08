// Enhanced ROI Calculator for Violet Mini Monitoring System

// Get all input elements
const fleetSizeInput = document.getElementById('fleet-size');
const unitPriceInput = document.getElementById('unit-price');
const timePerServiceInput = document.getElementById('time-per-service');
const disinfectTimeInput = document.getElementById('disinfect-time');
const hourlyRateInput = document.getElementById('hourly-rate');
const cleaningsWeekInput = document.getElementById('cleanings-week');
const emergencyCallsInput = document.getElementById('emergency-calls');
const emergencyMultiplierInput = document.getElementById('emergency-multiplier');
const premiumUpchargeInput = document.getElementById('premium-upcharge');
const financingTermInput = document.getElementById('financing-term');

// Get all result elements
const currentAnnualCostElement = document.getElementById('current-annual-cost');
const currentEmergencyCostElement = document.getElementById('current-emergency-cost');
const disinfectionSavingsElement = document.getElementById('disinfection-savings');
const monitoringSavingsElement = document.getElementById('monitoring-savings');
const emergencySavingsElement = document.getElementById('emergency-savings');
const premiumRevenueElement = document.getElementById('premium-revenue');
const totalBenefitElement = document.getElementById('total-benefit');
const totalInvestmentElement = document.getElementById('total-investment');
const totalLaborSavingsElement = document.getElementById('total-labor-savings');
const annualRoiElement = document.getElementById('annual-roi');
const benefitPerUnitElement = document.getElementById('benefit-per-unit');
const monthlyBenefitPerUnitElement = document.getElementById('monthly-benefit-per-unit');
const paybackElement = document.getElementById('payback');

// Constants
const MONITORING_SAVINGS_PERCENTAGE = 0.20; // 20% efficiency gain from smart monitoring
const EMERGENCY_PREVENTION_RATE = 0.85; // 85% of emergencies prevented

// Calculate ROI
function calculateROI() {
    // Get input values
    const numberOfUnits = parseInt(fleetSizeInput.value) || 50;
    const unitPrice = parseFloat(unitPriceInput.value) || 500;
    const timePerService = parseFloat(timePerServiceInput.value) || 10;
    const disinfectTime = parseFloat(disinfectTimeInput.value) || 3;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 25;
    const cleaningsPerWeek = parseInt(cleaningsWeekInput.value) || 2;
    const emergencyCallsPerMonth = parseFloat(emergencyCallsInput.value) || 0.5;
    const emergencyMultiplier = parseFloat(emergencyMultiplierInput.value) || 2.0;
    const premiumUpcharge = parseFloat(premiumUpchargeInput.value) || 20;
    const financingTerm = parseInt(financingTermInput.value) || 24;
    
    // Current Annual Labor Cost
    const weeklyLaborHoursPerUnit = (timePerService / 60) * cleaningsPerWeek;
    const weeklyLaborCostPerUnit = weeklyLaborHoursPerUnit * hourlyRate;
    const totalWeeklyLaborCost = weeklyLaborCostPerUnit * numberOfUnits;
    const currentAnnualLaborCost = totalWeeklyLaborCost * 52;
    
    // Current Annual Emergency Cost
    const emergencyServiceTime = timePerService; // Same time per emergency call
    const emergencyHourlyRate = hourlyRate * emergencyMultiplier;
    const emergencyCallCost = (emergencyServiceTime / 60) * emergencyHourlyRate;
    const currentAnnualEmergencyCost = emergencyCallsPerMonth * numberOfUnits * 12 * emergencyCallCost;
    
    // Disinfection Savings (UV eliminates manual scrubbing)
    const disinfectionWeeklyHours = (disinfectTime / 60) * cleaningsPerWeek * numberOfUnits;
    const disinfectionWeeklyCost = disinfectionWeeklyHours * hourlyRate;
    const annualDisinfectionSavings = disinfectionWeeklyCost * 52;
    
    // Smart Monitoring Savings (20% efficiency improvement)
    const baseServiceTime = timePerService - disinfectTime; // Service time without disinfection
    const monitoringTimeReduction = baseServiceTime * MONITORING_SAVINGS_PERCENTAGE;
    const monitoringWeeklyHours = (monitoringTimeReduction / 60) * cleaningsPerWeek * numberOfUnits;
    const monitoringWeeklyCost = monitoringWeeklyHours * hourlyRate;
    const annualMonitoringSavings = monitoringWeeklyCost * 52;
    
    // Emergency Prevention Savings
    const annualEmergencyPreventionSavings = currentAnnualEmergencyCost * EMERGENCY_PREVENTION_RATE;
    
    // Premium Revenue
    const monthlyPremiumRevenue = numberOfUnits * premiumUpcharge;
    const annualPremiumRevenue = monthlyPremiumRevenue * 12;
    
    // Total Benefits
    const totalAnnualBenefit = annualDisinfectionSavings + annualMonitoringSavings + annualEmergencyPreventionSavings + annualPremiumRevenue;
    const totalLaborSavings = annualDisinfectionSavings + annualMonitoringSavings;
    
    // Investment Analysis
    const totalInvestment = numberOfUnits * unitPrice;
    const annualBenefitPerUnit = totalAnnualBenefit / numberOfUnits;
    const monthlyBenefitPerUnit = annualBenefitPerUnit / 12;
    const paybackMonths = totalInvestment / (totalAnnualBenefit / 12);
    const annualRoiPercentage = (totalAnnualBenefit / totalInvestment) * 100;
    
    // Update display
    currentAnnualCostElement.textContent = '$' + Math.round(currentAnnualLaborCost).toLocaleString();
    currentEmergencyCostElement.textContent = '$' + Math.round(currentAnnualEmergencyCost).toLocaleString();
    disinfectionSavingsElement.textContent = '$' + Math.round(annualDisinfectionSavings).toLocaleString();
    monitoringSavingsElement.textContent = '$' + Math.round(annualMonitoringSavings).toLocaleString();
    emergencySavingsElement.textContent = '$' + Math.round(annualEmergencyPreventionSavings).toLocaleString();
    premiumRevenueElement.textContent = '$' + Math.round(annualPremiumRevenue).toLocaleString();
    totalBenefitElement.textContent = '$' + Math.round(totalAnnualBenefit).toLocaleString();
    totalInvestmentElement.textContent = '$' + totalInvestment.toLocaleString();
    totalLaborSavingsElement.textContent = '$' + Math.round(totalLaborSavings).toLocaleString();
    annualRoiElement.textContent = Math.round(annualRoiPercentage) + '%';
    benefitPerUnitElement.textContent = '$' + Math.round(annualBenefitPerUnit).toLocaleString();
    monthlyBenefitPerUnitElement.textContent = '$' + Math.round(monthlyBenefitPerUnit).toLocaleString();
    
    // Format payback period
    if (paybackMonths < 1) {
        const weeks = paybackMonths * 4.33;
        paybackElement.textContent = weeks.toFixed(1) + ' weeks';
    } else if (paybackMonths < 12) {
        paybackElement.textContent = paybackMonths.toFixed(1) + ' months';
    } else {
        const years = paybackMonths / 12;
        paybackElement.textContent = years.toFixed(1) + ' years';
    }
    
    // Add visual feedback for good ROI (keeping existing colors for consistency)
    if (paybackMonths < 12) {
        paybackElement.style.color = 'white';
        paybackElement.style.fontWeight = '800';
    } else if (paybackMonths < 24) {
        paybackElement.style.color = 'white';
        paybackElement.style.fontWeight = '800';
    } else {
        paybackElement.style.color = 'white';
        paybackElement.style.fontWeight = '800';
    }
    
    // Update cash flow chart after calculation
    updateCashFlowChart();
}

// Add event listeners for all inputs
fleetSizeInput.addEventListener('input', calculateROI);
unitPriceInput.addEventListener('input', calculateROI);
timePerServiceInput.addEventListener('input', calculateROI);
disinfectTimeInput.addEventListener('input', calculateROI);
hourlyRateInput.addEventListener('input', calculateROI);
cleaningsWeekInput.addEventListener('input', calculateROI);
emergencyCallsInput.addEventListener('input', calculateROI);
emergencyMultiplierInput.addEventListener('input', calculateROI);
premiumUpchargeInput.addEventListener('input', calculateROI);
financingTermInput.addEventListener('input', calculateROI);

// Calculate initial values
calculateROI();

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add number formatting to inputs
function formatNumberInput(input) {
    input.addEventListener('blur', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = parseFloat(this.value).toString();
        }
    });
}

formatNumberInput(fleetSizeInput);
formatNumberInput(unitPriceInput);
formatNumberInput(timePerServiceInput);
formatNumberInput(disinfectTimeInput);
formatNumberInput(hourlyRateInput);
formatNumberInput(cleaningsWeekInput);
formatNumberInput(emergencyCallsInput);
formatNumberInput(emergencyMultiplierInput);
formatNumberInput(premiumUpchargeInput);
formatNumberInput(financingTermInput);

// Mobile tooltip handling
function handleMobileTooltips() {
    const infoIcons = document.querySelectorAll('.info-icon');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close any open tooltips
            document.querySelectorAll('.tooltip.mobile-active').forEach(tooltip => {
                tooltip.classList.remove('mobile-active');
            });
            
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.classList.add('mobile-active');
                
                // Add close button on mobile
                if (window.innerWidth <= 768) {
                    if (!tooltip.querySelector('.tooltip-close')) {
                        const closeBtn = document.createElement('button');
                        closeBtn.className = 'tooltip-close';
                        closeBtn.innerHTML = '×';
                        closeBtn.onclick = function(e) {
                            e.stopPropagation();
                            tooltip.classList.remove('mobile-active');
                        };
                        tooltip.appendChild(closeBtn);
                    }
                }
            }
        });
    });
    
    // Close tooltips when clicking elsewhere
    document.addEventListener('click', function() {
        document.querySelectorAll('.tooltip.mobile-active').forEach(tooltip => {
            tooltip.classList.remove('mobile-active');
        });
    });
}

// Add mobile-specific CSS class for active tooltips
const style = document.createElement('style');
style.textContent = `
    .tooltip.mobile-active {
        opacity: 1 !important;
        visibility: visible !important;
    }
`;
document.head.appendChild(style);

// Initialize mobile tooltip handling
handleMobileTooltips();

// Mobile Navigation Toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    }
}

// Simple/Advanced Calculator Toggle
function initializeCalculatorToggle() {
    const advancedToggle = document.getElementById('advanced-toggle');
    const advancedFields = document.getElementById('advanced-fields');
    const defaultNotice = document.getElementById('default-notice');
    
    if (!advancedToggle || !advancedFields) return;
    
    let isAdvanced = false;
    
    advancedToggle.addEventListener('click', function() {
        isAdvanced = !isAdvanced;
        
        if (isAdvanced) {
            // Show advanced fields with slide down animation
            advancedFields.classList.remove('hidden');
            advancedFields.style.maxHeight = '0';
            advancedFields.style.opacity = '0';
            
            // Trigger animation
            setTimeout(() => {
                advancedFields.style.maxHeight = '400px';
                advancedFields.style.opacity = '1';
            }, 10);
            
            advancedToggle.innerHTML = 'Simple Mode';
            if (defaultNotice) defaultNotice.style.display = 'none';
        } else {
            // Hide advanced fields with slide up animation
            advancedFields.style.maxHeight = '0';
            advancedFields.style.opacity = '0';
            
            // Complete the hide after animation
            setTimeout(() => {
                advancedFields.classList.add('hidden');
                advancedFields.style.maxHeight = '';
                advancedFields.style.opacity = '';
            }, 300);
            
            advancedToggle.innerHTML = 'Advanced Options';
            if (defaultNotice) defaultNotice.style.display = 'block';
        }
        
        // Store state in session storage
        sessionStorage.setItem('calculatorMode', isAdvanced ? 'advanced' : 'simple');
    });
    
    // Check for saved state
    const savedMode = sessionStorage.getItem('calculatorMode');
    if (savedMode === 'advanced') {
        // Simulate click to activate advanced mode
        advancedToggle.click();
    }
}

// Breakdown Toggle
function initializeBreakdownToggle() {
    const breakdownToggle = document.getElementById('breakdown-toggle');
    const breakdownContent = document.getElementById('breakdown-content');
    
    if (!breakdownToggle || !breakdownContent) return;
    
    let isBreakdownOpen = false;
    
    breakdownToggle.addEventListener('click', function() {
        isBreakdownOpen = !isBreakdownOpen;
        
        if (isBreakdownOpen) {
            breakdownContent.classList.remove('hidden');
            breakdownToggle.innerHTML = 'Hide detailed breakdown ▲';
        } else {
            breakdownContent.classList.add('hidden');
            breakdownToggle.innerHTML = 'Show detailed breakdown ▼';
        }
    });
}

// Initialize toggles
initializeCalculatorToggle();
initializeBreakdownToggle();

// FAQ Accordion Functionality
function initializeFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = document.getElementById(this.getAttribute('aria-controls'));
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswer = document.getElementById(otherQuestion.getAttribute('aria-controls'));
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherAnswer.setAttribute('aria-hidden', 'true');
                    otherAnswer.classList.remove('show');
                }
            });
            
            // Toggle current FAQ item
            if (isExpanded) {
                // Close current item
                this.setAttribute('aria-expanded', 'false');
                answer.setAttribute('aria-hidden', 'true');
                answer.classList.remove('show');
            } else {
                // Open current item
                this.setAttribute('aria-expanded', 'true');
                answer.setAttribute('aria-hidden', 'false');
                answer.classList.add('show');
            }
        });
        
        // Add keyboard support
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Initialize FAQ accordion
initializeFAQAccordion();

// Cash Flow Chart functionality
let cashFlowChart = null;

function createCashFlowChart() {
    const canvas = document.getElementById('cash-flow-chart');
    if (!canvas) return; // Exit if canvas doesn't exist
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size for proper rendering
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
        // Canvas not visible yet, try again later
        setTimeout(updateCashFlowChart, 100);
        return;
    }
    
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const width = rect.width;
    const height = rect.height;
    
    // Chart settings
    const margin = { top: 40, right: 40, bottom: 60, left: 80 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Get calculator values
    const numberOfUnits = parseInt(fleetSizeInput.value) || 50;
    const unitPrice = parseFloat(unitPriceInput.value) || 500;
    const financingTerm = parseInt(financingTermInput.value) || 24;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 25;
    const timePerService = parseFloat(timePerServiceInput.value) || 10;
    const disinfectTime = parseFloat(disinfectTimeInput.value) || 3;
    const cleaningsPerWeek = parseInt(cleaningsWeekInput.value) || 2;
    const premiumUpcharge = parseFloat(premiumUpchargeInput.value) || 20;
    
    // Calculate monthly values
    const totalInvestment = numberOfUnits * unitPrice;
    let monthlyFinancingCost = 0;
    
    if (financingTerm === 0) {
        // Lump sum in month 1
        monthlyFinancingCost = 0;
    } else {
        // Spread over financing term
        monthlyFinancingCost = totalInvestment / financingTerm;
    }
    
    // Monthly savings from UV disinfection
    const disinfectionMonthlySavings = ((disinfectTime / 60) * cleaningsPerWeek * 4.33 * numberOfUnits * hourlyRate);
    
    // Monthly savings from smart monitoring (20% efficiency gain)
    const baseServiceTime = timePerService - disinfectTime;
    const monitoringMonthlySavings = ((baseServiceTime * 0.20 / 60) * cleaningsPerWeek * 4.33 * numberOfUnits * hourlyRate);
    
    // Monthly premium revenue
    const monthlyPremiumRevenue = numberOfUnits * premiumUpcharge;
    
    const totalMonthlySavings = disinfectionMonthlySavings + monitoringMonthlySavings;
    const totalMonthlyBenefit = totalMonthlySavings + monthlyPremiumRevenue;
    
    // Determine chart range (mobile: 24 months, desktop: 36 months)
    const maxMonths = width < 768 ? 24 : 36;
    
    // Generate data
    const months = [];
    const financingData = [];
    const savingsData = [];
    const revenueData = [];
    
    for (let i = 0; i <= maxMonths; i++) {
        months.push(i);
        
        if (financingTerm === 0) {
            // Lump sum spike in month 1
            financingData.push(i === 1 ? totalInvestment : 0);
        } else {
            // Monthly payments for financing term
            financingData.push(i <= financingTerm ? monthlyFinancingCost : 0);
        }
        
        savingsData.push(totalMonthlySavings);
        revenueData.push(monthlyPremiumRevenue);
    }
    
    // Find break-even point where total benefit >= financing cost
    let breakevenMonth = 0;
    for (let i = 1; i <= maxMonths; i++) {
        const financing = financingTerm === 0 ? (i === 1 ? totalInvestment : 0) : (i <= financingTerm ? monthlyFinancingCost : 0);
        if (totalMonthlyBenefit >= financing && breakevenMonth === 0) {
            breakevenMonth = i;
            break;
        }
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Calculate scales
    const maxValue = Math.max(
        Math.max(...financingData),
        totalMonthlyBenefit,
        monthlyFinancingCost
    );
    const minValue = 0;
    const valueRange = maxValue - minValue;
    
    // Add padding to max value for better visualization
    const paddedMaxValue = maxValue * 1.1;
    const paddedRange = paddedMaxValue - minValue;
    
    const barWidth = chartWidth / (maxMonths + 1);
    const xScale = (month) => margin.left + (month / maxMonths) * chartWidth;
    const yScale = (value) => margin.top + chartHeight - ((value - minValue) / paddedRange) * chartHeight;
    
    // Draw grid lines
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 1;
    
    // Vertical grid lines (every 6 months)
    for (let i = 0; i <= maxMonths; i += 6) {
        const x = xScale(i);
        ctx.beginPath();
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, margin.top + chartHeight);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const value = (paddedMaxValue / 5) * i;
        const y = yScale(value);
        ctx.beginPath();
        ctx.moveTo(margin.left, y);
        ctx.lineTo(margin.left + chartWidth, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top + chartHeight);
    ctx.lineTo(margin.left + chartWidth, margin.top + chartHeight);
    ctx.stroke();
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top);
    ctx.lineTo(margin.left, margin.top + chartHeight);
    ctx.stroke();
    
    // Draw stacked bars
    for (let i = 1; i <= maxMonths; i++) {
        const x = xScale(i) - barWidth / 2;
        const baseY = yScale(0);
        
        // Bottom layer: Cost Savings (green)
        const savingsHeight = (savingsData[i] / paddedRange) * chartHeight;
        ctx.fillStyle = '#27ae60';
        ctx.fillRect(x, baseY - savingsHeight, barWidth * 0.8, savingsHeight);
        
        // Top layer: Premium Revenue (purple)
        const revenueHeight = (revenueData[i] / paddedRange) * chartHeight;
        ctx.fillStyle = '#7B68EE';
        ctx.fillRect(x, baseY - savingsHeight - revenueHeight, barWidth * 0.8, revenueHeight);
        
        // Add subtle bar borders
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, baseY - savingsHeight, barWidth * 0.8, savingsHeight);
        ctx.strokeRect(x, baseY - savingsHeight - revenueHeight, barWidth * 0.8, revenueHeight);
    }
    
    // Draw financing cost line (red)
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i <= maxMonths; i++) {
        const x = xScale(i);
        const y = yScale(financingData[i]);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // Add financing line markers for better visibility
    ctx.fillStyle = '#e74c3c';
    for (let i = 0; i <= maxMonths; i += 3) {
        const x = xScale(i);
        const y = yScale(financingData[i]);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Draw break-even marker
    if (breakevenMonth > 0 && breakevenMonth <= maxMonths) {
        const x = xScale(breakevenMonth);
        ctx.strokeStyle = '#f39c12';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, margin.top + chartHeight);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Break-even label
        ctx.fillStyle = '#f39c12';
        ctx.font = 'bold 12px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Positive', x, margin.top - 20);
        ctx.fillText('Cash Flow', x, margin.top - 8);
    }
    
    // Draw axis labels
    ctx.fillStyle = '#2c3e50';
    ctx.font = '12px Poppins, sans-serif';
    ctx.textAlign = 'center';
    
    // X-axis labels
    for (let i = 0; i <= maxMonths; i += 6) {
        const x = xScale(i);
        const y = margin.top + chartHeight + 20;
        ctx.fillText(i.toString(), x, y);
    }
    
    // Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = (paddedMaxValue / 5) * i;
        const x = margin.left - 10;
        const y = yScale(value) + 4;
        ctx.fillText('$' + Math.round(value).toLocaleString(), x, y);
    }
    
    // Axis titles
    ctx.textAlign = 'center';
    ctx.font = '14px Poppins, sans-serif';
    
    // X-axis title
    ctx.fillText('Months', margin.left + chartWidth / 2, height - 10);
    
    // Y-axis title
    ctx.save();
    ctx.translate(20, margin.top + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Monthly Value ($)', 0, 0);
    ctx.restore();
    
    // Store chart data for tooltip functionality
    window.chartData = {
        months,
        savingsData,
        revenueData,
        financingData,
        xScale,
        yScale,
        barWidth,
        margin,
        breakevenMonth
    };
}

// Update chart when calculator changes
function updateCashFlowChart() {
    if (document.getElementById('cash-flow-chart')) {
        createCashFlowChart();
    }
}

// Initialize chart when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Delay chart initialization to ensure calculator has run
    setTimeout(updateCashFlowChart, 100);
});

// Handle window resize
window.addEventListener('resize', function() {
    setTimeout(updateCashFlowChart, 100);
});

// Add chart update to the existing calculateROI function
// This will be called at the end of calculateROI

// Chart tooltip functionality
function addChartTooltips() {
    const canvas = document.getElementById('cash-flow-chart');
    if (!canvas) return;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'chart-tooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        pointer-events: none;
        z-index: 1000;
        display: none;
        white-space: nowrap;
    `;
    document.body.appendChild(tooltip);
    
    canvas.addEventListener('mousemove', function(e) {
        if (!window.chartData) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const { months, savingsData, revenueData, financingData, xScale, margin, barWidth } = window.chartData;
        
        // Find which bar was hovered
        let hoveredMonth = -1;
        for (let i = 1; i < months.length; i++) {
            const barX = xScale(i) - barWidth / 2;
            if (x >= barX && x <= barX + barWidth * 0.8) {
                hoveredMonth = i;
                break;
            }
        }
        
        if (hoveredMonth > 0) {
            const savings = savingsData[hoveredMonth];
            const revenue = revenueData[hoveredMonth];
            const financing = financingData[hoveredMonth];
            const totalBenefit = savings + revenue;
            
            tooltip.innerHTML = `
                <div><strong>Month ${hoveredMonth}</strong></div>
                <div>Cost Savings: $${Math.round(savings).toLocaleString()}</div>
                <div>Premium Revenue: $${Math.round(revenue).toLocaleString()}</div>
                <div>Total Benefit: $${Math.round(totalBenefit).toLocaleString()}</div>
                <div style="border-top: 1px solid #666; margin: 4px 0; padding-top: 4px;">
                Financing Cost: $${Math.round(financing).toLocaleString()}</div>
                <div style="color: ${totalBenefit >= financing ? '#4CAF50' : '#f44336'};">
                Net: $${Math.round(totalBenefit - financing).toLocaleString()}
                </div>
            `;
            
            tooltip.style.display = 'block';
            tooltip.style.left = (e.clientX + 10) + 'px';
            tooltip.style.top = (e.clientY - 10) + 'px';
        } else {
            tooltip.style.display = 'none';
        }
    });
    
    canvas.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
}

// Add tooltips to update function (but only create them once)
let tooltipsInitialized = false;
const originalUpdateChart = updateCashFlowChart;
updateCashFlowChart = function() {
    originalUpdateChart();
    if (!tooltipsInitialized) {
        setTimeout(function() {
            addChartTooltips();
            tooltipsInitialized = true;
        }, 100);
    }
};

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and case studies
document.querySelectorAll('.feature, .case-study, .econ-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});