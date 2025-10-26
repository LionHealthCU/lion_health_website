import React, { useState, useEffect } from 'react';
import { PageHero } from '../components/PageHero';

interface Lead {
  name: string;
  imageUrl: string;
  description: string;
}

interface LeadershipSection {
  title: string;
  leads: Lead[];
}

const LeadershipSection: React.FC<{ data: LeadershipSection[] }> = ({ data }) => {
  const allTeamMembers = data.flatMap(section => 
    section.leads.map(lead => ({
      ...lead,
      role: section.title
    }))
  );

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '0 var(--space-6)'
    }}>
      <h2 style={{ 
        textAlign: 'center',
        marginBottom: 'var(--space-16)',
        fontWeight: 'var(--weight-bold)',
        fontSize: '3rem',
        color: 'var(--navy)'
      }}>
        Meet the team
      </h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-16)',
        justifyContent: 'center'
      }} className="people-grid">
        {allTeamMembers.map((person, index) => (
          <div key={index} style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
              <img 
                src={person.imageUrl} 
                alt={person.name}
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: 'var(--space-4)',
                  backgroundColor: '#f5f5f5'
                }}
              />
            
            <h3 style={{ 
              margin: '0 0 var(--space-2) 0', 
              fontWeight: 'var(--weight-bold)',
              fontSize: '1.5rem',
              color: 'var(--navy)',
              lineHeight: '1.2'
            }}>
              {person.name}
            </h3>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                margin: '0 0 var(--space-1) 0', 
                fontWeight: 'var(--weight-semibold)',
                fontSize: '1.1rem',
                color: 'var(--teal)',
                lineHeight: '1.3'
              }}>
                {person.role}
              </p>
              <p style={{ 
                margin: '0 0 var(--space-1) 0', 
                fontWeight: 'var(--weight-normal)',
                fontSize: '1rem',
                color: 'var(--navy)',
                opacity: 0.7,
                lineHeight: '1.3'
              }}>
                {person.description.split(' | ')[0]}
              </p>
              <p style={{ 
                margin: 0, 
                fontWeight: 'var(--weight-normal)',
                fontSize: '1rem',
                color: 'var(--navy)',
                opacity: 0.5,
                lineHeight: '1.3'
              }}>
                {person.description.split(' | ')[1] || ''}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const People: React.FC = () => {
  const [leadershipData, setLeadershipData] = useState<LeadershipSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/people.json')
      .then(response => response.json())
      .then(data => {
        setLeadershipData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading people data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page">
        <PageHero 
          title="Our People" 
          subtitle="Meet the students building LionHealth's healthcare innovations" 
        />
        <div style={{ 
          backgroundColor: 'var(--white)', 
          padding: 'var(--space-20) 0',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p style={{ color: 'var(--navy)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <PageHero 
        title="Our People" 
        subtitle="Meet the students building LionHealth's healthcare innovations" 
      />

      <div style={{ 
        backgroundColor: 'var(--white)', 
        padding: 'var(--space-20) 0',
        minHeight: '100vh'
      }}>
        <LeadershipSection data={leadershipData} />
      </div>
    </div>
  );
};