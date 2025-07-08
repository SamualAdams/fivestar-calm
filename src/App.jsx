import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhatVioletDoes from './components/WhatVioletDoes'
import HowItWorks from './components/HowItWorks'
import ROICalculator from './components/ROICalculator'
import WhyOperatorsNeed from './components/WhyOperatorsNeed'
import NextSteps from './components/NextSteps'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhatVioletDoes />
        <HowItWorks />
        <ROICalculator />
        <WhyOperatorsNeed />
        <NextSteps />
        <FAQ />
        {/* <FinancingOptions /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App