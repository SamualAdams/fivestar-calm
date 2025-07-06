// ROI Calculator for Violet Mini Monitoring System

// Get all input elements
const fleetSizeInput = document.getElementById('fleet-size');
const timePerServiceInput = document.getElementById('time-per-service');
const hourlyRateInput = document.getElementById('hourly-rate');
const cleaningsWeekInput = document.getElementById('cleanings-week');
const premiumUpchargeInput = document.getElementById('premium-upcharge');

// Get all result elements
const currentAnnualCostElement = document.getElementById('current-annual-cost');
const newAnnualCostElement = document.getElementById('new-annual-cost');
const annualSavingsElement = document.getElementById('annual-savings');
const premiumRevenueElement = document.getElementById('premium-revenue');
const totalBenefitElement = document.getElementById('total-benefit');
const totalInvestmentElement = document.getElementById('total-investment');
const paybackElement = document.getElementById('payback');

// Constants
const VIOLET_COST_PER_UNIT = 500;
const TIME_SAVINGS_PERCENTAGE = 0.30; // 30% time reduction

// Calculate ROI
function calculateROI() {
    // Get input values
    const numberOfUnits = parseInt(fleetSizeInput.value) || 50;
    const timePerService = parseFloat(timePerServiceInput.value) || 10;
    const hourlyRate = parseFloat(hourlyRateInput.value) || 25;
    const cleaningsPerWeek = parseInt(cleaningsWeekInput.value) || 2;
    const premiumUpcharge = parseFloat(premiumUpchargeInput.value) || 20;
    
    // Current State Calculations
    const weeklyLaborHoursPerUnit = (timePerService / 60) * cleaningsPerWeek;
    const weeklyLaborCostPerUnit = weeklyLaborHoursPerUnit * hourlyRate;
    const totalWeeklyLaborCost = weeklyLaborCostPerUnit * numberOfUnits;
    const currentAnnualLaborCost = totalWeeklyLaborCost * 52;
    
    // With Violet Mini Calculations
    const newTimePerService = timePerService * (1 - TIME_SAVINGS_PERCENTAGE);
    const newWeeklyLaborHoursPerUnit = (newTimePerService / 60) * cleaningsPerWeek;
    const newWeeklyLaborCostPerUnit = newWeeklyLaborHoursPerUnit * hourlyRate;
    const totalNewWeeklyLaborCost = newWeeklyLaborCostPerUnit * numberOfUnits;
    const newAnnualLaborCost = totalNewWeeklyLaborCost * 52;
    
    // Calculate savings and revenue
    const annualLaborSavings = currentAnnualLaborCost - newAnnualLaborCost;
    const monthlyPremiumRevenue = numberOfUnits * premiumUpcharge;
    const annualPremiumRevenue = monthlyPremiumRevenue * 12;
    const totalAnnualBenefit = annualLaborSavings + annualPremiumRevenue;
    
    // Investment and payback
    const totalInvestment = numberOfUnits * VIOLET_COST_PER_UNIT;
    const paybackMonths = totalInvestment / (totalAnnualBenefit / 12);
    
    // Update display
    currentAnnualCostElement.textContent = '$' + Math.round(currentAnnualLaborCost).toLocaleString();
    newAnnualCostElement.textContent = '$' + Math.round(newAnnualLaborCost).toLocaleString();
    annualSavingsElement.textContent = '$' + Math.round(annualLaborSavings).toLocaleString();
    premiumRevenueElement.textContent = '$' + Math.round(annualPremiumRevenue).toLocaleString();
    totalBenefitElement.textContent = '$' + Math.round(totalAnnualBenefit).toLocaleString();
    totalInvestmentElement.textContent = '$' + totalInvestment.toLocaleString();
    
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
    
    // Add visual feedback for good ROI
    if (paybackMonths < 12) {
        paybackElement.style.color = '#27AE60';
        paybackElement.style.fontWeight = '700';
    } else if (paybackMonths < 24) {
        paybackElement.style.color = '#7B68EE';
        paybackElement.style.fontWeight = '600';
    } else {
        paybackElement.style.color = '#E74C3C';
        paybackElement.style.fontWeight = '600';
    }
}

// Add event listeners
fleetSizeInput.addEventListener('input', calculateROI);
timePerServiceInput.addEventListener('input', calculateROI);
hourlyRateInput.addEventListener('input', calculateROI);
cleaningsWeekInput.addEventListener('input', calculateROI);
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
formatNumberInput(timePerServiceInput);
formatNumberInput(hourlyRateInput);
formatNumberInput(cleaningsWeekInput);
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