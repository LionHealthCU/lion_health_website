import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

const leadershipData = [
  {
    title: 'Founders',
    imageText: 'Founders',
    description: 'Leading the vision and strategic direction of LionHealth\'s mission to transform healthcare.',
    leads: ['Lorem Ipsum', 'Dolor Sit Amet']
  },
  {
    title: 'Clinical Leads',
    imageText: 'Clinical Leads',
    description: 'Ensuring medical accuracy and clinical relevance in all healthcare solutions.',
    leads: ['Consectetur Adipiscing', 'Sed Do Eiusmod']
  },
  {
    title: 'Hardware Leads',
    imageText: 'Hardware Leads',
    description: 'Designing and developing innovative medical devices and hardware solutions.',
    leads: ['Tempor Incididunt', 'Ut Labore Et']
  },
  {
    title: 'Software Leads',
    imageText: 'Software Leads',
    description: 'Building scalable software platforms and digital health applications.',
    leads: ['Dolore Magna', 'Aliqua Ut Enim']
  },
  {
    title: 'Business Leads',
    imageText: 'Business Leads',
    description: 'Driving business strategy, partnerships, and sustainable growth initiatives.',
    leads: ['Minim Veniam', 'Quis Nostrud']
  },
  {
    title: 'PR Leads',
    imageText: 'PR Leads',
    description: 'Managing communications, outreach, and building community engagement.',
    leads: ['Exercitation Ullamco', 'Laboris Nisi']
  }
];

const advisorsData = [
  {
    title: 'Dr. Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageText: 'Faculty Advisor',
    role: 'Faculty Advisor',
    animation: 'slide-left' as const
  },
  {
    title: 'Dr. Dolor Sit Amet',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageText: 'Industry Expert',
    role: 'Industry Advisor',
    animation: 'slide-right' as const
  }
];

const LeadershipCard: React.FC<{ data: typeof leadershipData[0]; index: number }> = ({ data, index }) => (
  <Card
    title={data.title}
    description={data.description}
    imageText={data.imageText}
    animationDelay={`${index * 0.1}s`}
    variant="white"
  >
    <div style={{ marginBottom: 'var(--space-3)' }}>
      {data.leads.map((lead, i) => (
        <p key={i} className="text-caption text-aqua" style={{ marginBottom: 'var(--space-1)' }}>
          {lead}
        </p>
      ))}
    </div>
  </Card>
);

const AdvisorCard: React.FC<{ data: typeof advisorsData[0]; index: number }> = ({ data, index }) => (
  <Card
    title={data.title}
    description={data.description}
    imageText={data.imageText}
    animationDelay={`${index * 0.1}s`}
    animation={data.animation}
    variant="white"
  >
    <p className="text-caption text-aqua" style={{ marginBottom: 'var(--space-3)' }}>
      {data.role}
    </p>
  </Card>
);

export const People: React.FC = () => (
  <div className="page">
    <PageHero 
      title="Our People" 
      subtitle="Meet the passionate students and advisors driving health innovation" 
    />

    <Section
      title="Leadership"
      subtitle="The visionaries leading our mission to transform healthcare through engineering."
      variant="white"
      contentCenter
    >
      <div className="grid grid-3" style={{ marginTop: 'var(--space-16)' }}>
        {leadershipData.map((data, index) => (
          <LeadershipCard key={index} data={data} index={index} />
        ))}
      </div>
    </Section>

    <Section
      title="Advisors"
      subtitle="Industry experts and faculty mentors guiding our mission forward."
      variant="white"
      contentCenter
      style={{ paddingTop: '0' }}
    >
      <div className="grid grid-2" style={{ marginTop: 'var(--space-16)' }}>
        {advisorsData.map((data, index) => (
          <AdvisorCard key={index} data={data} index={index} />
        ))}
      </div>
    </Section>
  </div>
);