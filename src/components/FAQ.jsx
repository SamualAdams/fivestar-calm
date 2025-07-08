import React from 'react'
import Section from './layout/Section'
import Container from './layout/Container'
import SectionHeader from './layout/SectionHeader'
import Accordion from './ui/Accordion'

const FAQ = () => {
  const faqs = [
    {
      question: "How long does installation take per unit?",
      answer: "Violet Mini is designed for fast retrofit. Most units can be upgraded in 15 minutes or less with basic tools—no special training required."
    },
    {
      question: "Will Violet Mini work with my existing fleet?",
      answer: "Yes, Violet Mini is compatible with all standard portable toilet models. It can be installed on both new and existing units."
    },
    {
      question: "What maintenance does the system require?",
      answer: "Violet Mini is low-maintenance. The UV lamp and sensors are designed for long life and only require periodic inspection during regular service visits."
    },
    {
      question: "How does the smart monitoring system work?",
      answer: "Integrated sensors track fill levels, usage, and unit status in real time. Alerts and data are sent to your dashboard or mobile device for proactive service planning."
    },
    {
      question: "Is financing available for upgrades?",
      answer: "Yes, equipment financing is available to help spread out the investment and match savings to monthly payments. See our Financing Options section for details."
    },
    {
      question: "What is the typical payback period?",
      answer: "Most operators see a full payback in 18-24 months, depending on fleet size, service frequency, and premium pricing adoption."
    },
    {
      question: "Can I pilot Violet Mini before a full rollout?",
      answer: "Absolutely. We offer pilot programs for 5-10 units so you can validate operational savings and benefits before committing to a full fleet upgrade."
    },
    {
      question: "How do I get started?",
      answer: "Contact us for a free consultation and custom quote. We'll discuss your needs, provide a tailored proposal, and help you plan your upgrade timeline."
    }
  ]

  return (
    <Section background="gray">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Answers to common questions about Violet Mini and the fleet upgrade process"
        />

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </Container>
    </Section>
  )
}

export default FAQ