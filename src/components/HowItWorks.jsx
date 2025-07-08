import React from 'react'
import Section from './layout/Section'
import Container from './layout/Container'
import SectionHeader from './layout/SectionHeader'
import Grid from './layout/Grid'
import StepCard from './content/StepCard'

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Install",
      description: "15-minute retrofit installation with universal compatibility for any portable toilet model."
    },
    {
      number: "2", 
      title: "Monitor",
      description: "Smart sensors track usage patterns, fill levels, and maintenance needs in real-time."
    },
    {
      number: "3",
      title: "Optimize",
      description: "Automated UV disinfection and data-driven route optimization reduce costs and improve service."
    }
  ]

  return (
    <Section id="features" background="white">
      <Container>
        <SectionHeader
          title="How It Works"
          description="Simple three-step process to transform your existing fleet into an operationally optimized system."
          spacing="lg"
        />

        <Grid cols={3} gap="lg">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              showConnector={true}
              isLast={index === steps.length - 1}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default HowItWorks