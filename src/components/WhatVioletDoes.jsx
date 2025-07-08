import React from 'react'
import { Zap, Monitor, TrendingUp, Wrench } from 'lucide-react'
import Section from './layout/Section'
import Container from './layout/Container'
import Grid from './layout/Grid'
import FeatureCard from './content/FeatureCard'

const WhatVioletDoes = () => {
  const benefits = [
    {
      icon: Zap,
      title: "UV Disinfection",
      description: "Disinfects without chemicals, giving your team more time for priority tasks."
    },
    {
      icon: Monitor,
      title: "Data Sensors",
      description: "Streams fleet metrics on usage to prevent overflows and plan maintenance."
    },
    {
      icon: TrendingUp,
      title: "Dashboarding",
      description: "Provides insights into fleet performance, helping you make data-driven decisions."
    },
    {
      icon: Wrench,
      title: "Fleet Integration",
      description: "15-minute install on any unit—upgrade in place for faster ROI without a full fleet swap."
    }
  ];

  return (
    <Section background="gray" className="py-16 md:py-24">
      <Container>
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-primary">
            Tech Upgrade
          </h2>
          <p className="text-lg text-gray-secondary max-w-4xl mx-auto leading-relaxed">
            Why replace your entire fleet when you can upgrade it? the five* Violet Mini system up-levels standard portable restrooms into smart units that improve service and reduce costs.
          </p>
        </div>
        
        {/* Feature Cards */}
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

export default WhatVioletDoes