// ROI Calculator for Violet UV Cleaning Robot

// Get all input elements
const fleetSizeInput = document.getElementById('fleet-size');
const costPerCleanInput = document.getElementById('cost-per-clean');
const cleaningsWeekInput = document.getElementById('cleanings-week');
const premiumUpchargeInput = document.getElementById('premium-upcharge');

// Get all result elements
const totalInvestmentElement = document.getElementById('total-investment');
const monthlySavingsElement = document.getElementById('monthly-savings');
const premiumRevenueElement = document.getElementById('premium-revenue');
const totalBenefitElement = document.getElementById('total-benefit');
const paybackElement = document.getElementById('payback');

// Constants
const VIOLET_COST_PER_UNIT = 500;
const WEEKS_PER_MONTH = 4.33;

// Calculate ROI
function calculateROI() {
    // Get input values
    const numberOfUnits = parseInt(fleetSizeInput.value) || 10;
    const costPerClean = parseFloat(costPerCleanInput.value) || 10;
    const cleaningsPerWeek = parseInt(cleaningsWeekInput.value) || 3;
    const premiumUpcharge = parseFloat(premiumUpchargeInput.value) || 20;
    
    // Calculate total investment
    const totalInvestment = numberOfUnits * VIOLET_COST_PER_UNIT;
    
    // Calculate monthly savings from eliminated cleaning costs
    const weeklySavingsPerUnit = costPerClean * cleaningsPerWeek;
    const monthlySavingsPerUnit = weeklySavingsPerUnit * WEEKS_PER_MONTH;
    const totalMonthlySavings = monthlySavingsPerUnit * numberOfUnits;
    
    // Calculate premium revenue potential
    const totalPremiumRevenue = premiumUpcharge * numberOfUnits;
    
    // Calculate total monthly benefit
    const totalMonthlyBenefit = totalMonthlySavings + totalPremiumRevenue;
    
    // Calculate payback period in months
    const paybackMonths = totalInvestment / totalMonthlyBenefit;
    
    // Update display
    totalInvestmentElement.textContent = '$' + totalInvestment.toLocaleString();
    monthlySavingsElement.textContent = '$' + Math.round(totalMonthlySavings).toLocaleString();
    premiumRevenueElement.textContent = '$' + Math.round(totalPremiumRevenue).toLocaleString();
    totalBenefitElement.textContent = '$' + Math.round(totalMonthlyBenefit).toLocaleString();
    
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
    if (paybackMonths < 6) {
        paybackElement.style.color = '#27AE60';
        paybackElement.style.fontWeight = '700';
    } else if (paybackMonths < 12) {
        paybackElement.style.color = '#7B68EE';
        paybackElement.style.fontWeight = '600';
    } else {
        paybackElement.style.color = '#E74C3C';
        paybackElement.style.fontWeight = '600';
    }
}

// Add event listeners
fleetSizeInput.addEventListener('input', calculateROI);
costPerCleanInput.addEventListener('input', calculateROI);
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
formatNumberInput(costPerCleanInput);
formatNumberInput(cleaningsWeekInput);
formatNumberInput(premiumUpchargeInput);

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