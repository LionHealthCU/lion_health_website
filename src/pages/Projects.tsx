import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

const currentProjectsData = [
  {
    title: 'Lorem Ipsum Dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageText: 'Current Project 1',
    animationDelay: '0s'
  },
  {
    title: 'Consectetur Adipiscing',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageText: 'Current Project 2',
    animationDelay: '0.1s'
  },
  {
    title: 'Sed Do Eiusmod',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    imageText: 'Current Project 3',
    animationDelay: '0.2s'
  }
];

const pastProjectsData = [
  {
    title: 'Tempor Incididunt',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageText: 'Past Project 1',
    animationDelay: '0s',
    animation: 'slide-left' as const
  },
  {
    title: 'Ut Labore Et',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageText: 'Past Project 2',
    animationDelay: '0.1s',
    animation: 'slide-right' as const
  },
  {
    title: 'Dolore Magna',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    imageText: 'Past Project 3',
    animationDelay: '0.2s',
    animation: 'slide-left' as const
  }
];

export const Projects: React.FC = () => (
  <div className="page">
    <PageHero 
      title="Our Projects" 
      subtitle="Innovative healthcare solutions making a global impact" 
    />

    <Section
      title="Current Projects"
      subtitle="Active projects pushing the boundaries of healthcare technology and accessibility."
      variant="white"
      contentCenter
    >
      <div className="grid grid-3" style={{ marginTop: 'var(--space-16)' }}>
        {currentProjectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageText={project.imageText}
            animationDelay={project.animationDelay}
            variant="white"
          />
        ))}
      </div>
    </Section>

    <Section
      title="Past Projects"
      subtitle="Completed projects that have made a lasting impact on healthcare accessibility."
      variant="white"
      contentCenter
      style={{ paddingTop: '0' }}
    >
      <div className="grid grid-3" style={{ marginTop: 'var(--space-16)' }}>
        {pastProjectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageText={project.imageText}
            animationDelay={project.animationDelay}
            animation={project.animation}
            variant="white"
          />
        ))}
      </div>
    </Section>
  </div>
);