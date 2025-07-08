import React from 'react'
import { Zap, Monitor, TrendingUp, Wrench } from 'lucide-react'
import Section from './layout/Section'
import Container from './layout/Container'
import Grid from './layout/Grid'
import FeatureCard from './content/FeatureCard'

const BenefitsOverview = () => {
  const benefits = [
    {
      icon: Zap,
      title: "UV Disinfection Technology",
      description: "Eliminates most bacteria, viruses, and pathogens automatically after each use. No chemicals needed—reduce manual cleaning time and improve service efficiency."
    },
    {
      icon: Monitor,
      title: "Smart Monitoring System", 
      description: "Real-time fill level and usage tracking with automated alerts that prevent overflows and optimize service routes—reducing fuel costs and emergency calls."
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Route optimization and predictive maintenance reduce operating costs while maintaining competitive pricing in your market."
    },
    {
      icon: Wrench,
      title: "Easy Fleet Integration",
      description: "Upgrade existing fleet with 15-minute installation and universal compatibility—lower investment than full fleet replacement with faster payback."
    }
  ]

  return (
    <Section background="gray">
      <Container>
        <Grid cols={4}>
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default BenefitsOverview