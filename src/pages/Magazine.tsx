import React from 'react';
import { PageHero } from '../components/PageHero';

export const Magazine: React.FC = () => {
  return (
    <div className="page">
      <PageHero 
        title="The Mane Frame" 
        subtitle="Columbia's first student-led publication at the intersection of biomedical engineering, medical physics, and global health" 
      />

      <div style={{ 
        backgroundColor: 'var(--white)', 
        padding: 'var(--space-20) 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 var(--space-6)'
        }}>
          
          {/* Mission Section */}
          <div style={{
            marginBottom: 'var(--space-16)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-8)',
              fontWeight: 'var(--weight-bold)',
              fontSize: '3rem',
              color: 'var(--navy)'
            }}>
              Our Mission
            </h2>
            <div style={{
              fontSize: '1.2rem',
              color: 'var(--navy)',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                LionHealth seeks to create Columbia's first student-led publication that brings a 
                <strong> human-centered, story-driven perspective</strong> to biomedical engineering, 
                medical physics, and global health.
              </p>
              <p>
                The Mane Frame will highlight the people behind the work while contextualizing 
                our projects within their scientific, ethical, and social dimensions.
              </p>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div style={{
            marginBottom: 'var(--space-16)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-8)',
              fontWeight: 'var(--weight-bold)',
              fontSize: '3rem',
              color: 'var(--navy)'
            }}>
              Coming Soon
            </h2>
            <div style={{
              width: '100%',
              height: '600px',
              backgroundColor: '#f8f9fa',
              border: '3px dashed #dee2e6',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  color: 'var(--teal)',
                  fontWeight: 'var(--weight-bold)',
                  marginBottom: 'var(--space-4)'
                }}>
                  The Mane Frame
                </div>
                <div style={{ 
                  fontSize: '1.3rem', 
                  color: 'var(--navy)', 
                  opacity: 0.7
                }}>
                  First issue launching soon
                </div>
              </div>
            </div>
          </div>

          {/* Join Team Section */}
          <div style={{
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-16)',
              fontWeight: 'var(--weight-bold)',
              fontSize: '3rem',
              color: 'var(--navy)'
            }}>
              Join The Team
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-12)',
              marginBottom: 'var(--space-8)',
              maxWidth: '1100px',
              margin: '0 auto var(--space-8)'
            }}>
              {/* Contributing Writers */}
              <div style={{
                backgroundColor: 'rgba(58, 101, 117, 0.05)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-16) var(--space-12)',
                border: '2px solid rgba(58, 101, 117, 0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--teal)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Contributing Writers
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--navy)',
                  opacity: 0.8,
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  Develop engaging articles and translate complex biomedical concepts into accessible stories.
                </p>
              </div>

              {/* Section Editors */}
              <div style={{
                backgroundColor: 'rgba(58, 101, 117, 0.05)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-16) var(--space-12)',
                border: '2px solid rgba(58, 101, 117, 0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--teal)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Section Editors
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--navy)',
                  opacity: 0.8,
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  Provide content review, editing, and fact-checking to ensure accuracy and clarity.
                </p>
              </div>

              {/* Illustrators */}
              <div style={{
                backgroundColor: 'rgba(58, 101, 117, 0.05)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-16) var(--space-12)',
                border: '2px solid rgba(58, 101, 117, 0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--teal)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Illustrators
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--navy)',
                  opacity: 0.8,
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  Lead visual design aspects including illustrations, graphics, photography, and layout.
                </p>
              </div>
            </div>

            {/* Apply Button */}
            <div style={{
              marginBottom: 'var(--space-6)'
            }}>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0p3ca_cl06VwPaMTLjhNjtiD1PzkW5bcPTAXlqPjXjLCNAg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </div>

            {/* Contact Info */}
            <div style={{
              fontSize: '1rem',
              color: 'var(--navy)',
              opacity: 0.7,
              textAlign: 'center'
            }}>
              Questions? Contact hs3564@columbia.edu and cce2136@barnard.edu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};