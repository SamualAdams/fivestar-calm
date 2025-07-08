import React from 'react'
import Section from './layout/Section'
import Container from './layout/Container'
import SectionHeader from './layout/SectionHeader'
import Grid from './layout/Grid'
import ProblemStatCard from './content/ProblemStatCard'

const WhyOperatorsNeed = () => {
  const insights = [
    {
      category: "Route Inefficiency",
      stat: "73%",
      description: "of operators report unnecessary service trips due to poor visibility into unit status and fill levels.",
      solution: {
        title: "Smart Monitoring Solution",
        description: "Real-time fill level tracking and predictive analytics eliminate unnecessary trips, optimizing your routes and reducing fuel costs by 20-30%."
      }
    },
    {
      category: "Emergency Calls",
      stat: "45%",
      description: "of service calls are emergencies (overflows, complaints) that cost 2-3x normal service rates due to route disruption.",
      solution: {
        title: "Preventive Alert System",
        description: "Automated alerts prevent 85% of emergencies by notifying you before units reach capacity or require immediate attention."
      }
    },
    {
      category: "Rising Costs",
      stat: "60%",
      description: "rise in labor costs over past 3 years while service efficiency has remained flat or declined in most markets.",
      solution: {
        title: "Automation & Efficiency",
        description: "UV disinfection eliminates manual scrubbing time while smart routing reduces total service hours by 15-25% per route."
      }
    }
  ]

  return (
    <Section id="industry-insights" background="gray">
      <Container>
        <SectionHeader
          title="Why Operators Need This"
          description="Industry challenges that Violet Mini addresses"
          spacing="lg"
        />

        <Grid cols={3}>
          {insights.map((insight, index) => (
            <ProblemStatCard
              key={index}
              category={insight.category}
              stat={insight.stat}
              description={insight.description}
              solution={insight.solution}
              statColor="rose-600"
              className="bg-green-light"
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default WhyOperatorsNeed