import React from 'react'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-16 md:pt-24 py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-primary leading-[1.4] md:leading-[1.4] mt-16">
            Reduce Operating Costs While Improving Service Quality
          </h1>
          <h2 className="mt-4 text-lg text-gray-600">
            UV disinfection and smart monitoring to your existing fleet
          </h2>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#features')}
              className="btn-primary text-center"
            >
              See How It Works
            </button>
            <button 
              onClick={() => scrollToSection('#roi')}
              className="btn-secondary text-center"
            >
              Calculate ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero