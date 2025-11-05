
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

interface Project {
  title: string;
  description: string;
  imageText: string;
}

export const Home: React.FC = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/home-projects.json')
      .then(response => response.json())
      .then(data => {
        setProjectsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading home projects data:', error);
        setLoading(false);
      });
  }, []);

  return (
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
            <div>
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
            <div>
              <img 
                src="/assets/group.jpg" 
                alt="LionHealth team" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  marginTop: 'var(--space-8)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Upcoming Events"
        variant="gradient"
        contentCenter
      >
        <div style={{ 
          marginTop: 'var(--space-16)', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: 'var(--space-4)'
        }}>
          <object
            data="/assets/events/LH Panel Flyer.pdf"
            type="application/pdf"
            style={{
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              minHeight: '800px',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              display: 'block',
              border: 'none'
            }}
            aria-label="Upcoming Events Flyer"
          >
            <p style={{ color: 'var(--white)', marginTop: 'var(--space-4)' }}>
              Unable to display PDF. <a href="/assets/events/LH Panel Flyer.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', textDecoration: 'underline' }}>Click here to view it</a>.
            </p>
          </object>
          <a 
            href="/assets/events/LH Panel Flyer.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--white)',
              textDecoration: 'underline',
              marginTop: 'var(--space-4)',
              fontSize: '0.9rem',
              opacity: 0.9
            }}
          >
            View PDF in new tab
          </a>
        </div>
      </Section>

      <Section
        title="Current Projects"
        subtitle="Active projects LionHealth members are working on"
        variant="white"
        contentCenter
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
            <p style={{ color: 'var(--navy)' }}>Loading projects...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-3" style={{ marginTop: 'var(--space-16)' }}>
              {projectsData.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageText={project.imageText}
                  variant="white"
                />
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-12)' }}>
              <Link to="/projects" className="btn btn-primary">See More Projects</Link>
            </div>
          </>
        )}
      </Section>
    </div>
  );
};