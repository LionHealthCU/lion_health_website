import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

const projectsData = [
  {
    title: 'Portable Diagnostic Kit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageText: 'MedTech Device',
    animationDelay: '0s'
  },
  {
    title: 'AI Disease Detection',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageText: 'AI Health Platform',
    animationDelay: '0.1s'
  },
  {
    title: 'Healthcare Access Program',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    imageText: 'Global Health Initiative',
    animationDelay: '0.2s'
  }
];

export const Home: React.FC = () => (
  <div className="page">
    <section className="hero">
      <div className="hero-content">
        <img src="/assets/logo.png" alt="LionHealth logo" className="hero-logo" />
        <h1 className="text-display-1 text-white">LionHealth</h1>
        <div className="hero-divider"></div>
        <div className="hero-mission">
          <p className="hero-mission-line">ENGINEERING FOR</p>
          <p className="hero-mission-line">WORLD HEALTH</p>
        </div>
      </div>
    </section>

    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-asymmetric">
          <div className="animate-slide-left">
            <h2 className="text-display-2 text-navy">Who We Are</h2>
            <div className="text-body-large text-navy" style={{ marginTop: 'var(--space-6)' }}>
              <p>
                Over <strong>2 billion people</strong> worldwide lack access to essential biomedical devices, highlighting the urgent need for solutions that address global healthcare disparities.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                LionHealth draws inspiration from the ethos of <strong>Columbia Engineering</strong> which places a strong emphasis on "<strong>Engineering for Humanity</strong>."
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                At the heart of our mission lies a commitment to advancing <strong>equity</strong> through <strong>engineering</strong> and <strong>innovation</strong> for global health.
              </p>
            </div>
          </div>
          <div className="animate-slide-right">
            <div className="card-visual" style={{ height: '400px', marginTop: 'var(--space-8)' }}>
              <div className="placeholder-image">
                <span>Healthcare Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Section
      title="Current Projects"
      subtitle="Active projects pushing the boundaries of healthcare technology and accessibility."
      variant="gradient"
      contentCenter
    >
      <div className="grid grid-3" style={{ marginTop: 'var(--space-16)' }}>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageText={project.imageText}
            animationDelay={project.animationDelay}
          />
        ))}
      </div>
      <div style={{ marginTop: 'var(--space-12)' }}>
        <Link to="/projects" className="btn btn-primary">See More Projects</Link>
      </div>
    </Section>
  </div>
);