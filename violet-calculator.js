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
            // Show advanced fields
            advancedFields.classList.remove('hidden');
            advancedToggle.innerHTML = '⚙️ Simple Mode';
            if (defaultNotice) defaultNotice.style.display = 'none';
        } else {
            // Hide advanced fields
            advancedFields.classList.add('hidden');
            advancedToggle.innerHTML = '⚙️ Advanced Options';
            if (defaultNotice) defaultNotice.style.display = 'block';
        }
    });
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