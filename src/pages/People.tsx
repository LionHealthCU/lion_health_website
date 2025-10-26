import React from 'react';
import { PageHero } from '../components/PageHero';

const leadershipData = [
  {
    title: 'Co-Presidents',
    leads: [
      { 
        name: 'Andre Perez', 
        imageUrl: '/assets/headshots/Andre.jpg',
        description: 'Biomedical Engineering | SEAS \'26'
      },
      { 
        name: 'Caroline Schleif', 
        imageUrl: '/assets/headshots/Caroline.jpg',
        description: 'Chemical Engineering | SEAS \'26'
      }
    ]
  },
  {
    title: 'Clinical Lead',
    leads: [
      { 
        name: 'Lina Huang', 
        imageUrl: '/assets/headshots/Lina.jpg',
        description: 'Biology & Medical Humanities | CC \'26'
      }
    ]
  },
  {
    title: 'Hardware Engineering Lead',
    leads: [
      { 
        name: 'Harjaisal Brar', 
        imageUrl: '/assets/headshots/Harjaisal.jpg',
        description: 'Biomedical Engineering | SEAS \'28'
      },
      { 
        name: 'Dayana Soza Soto', 
        imageUrl: '/assets/headshots/Dayana.jpg',
        description: 'Biomedical Engineering | SEAS \'26'
      }
    ]
  },
  {
    title: 'Software Engineering Lead',
    leads: [
      { 
        name: 'Rahi Mitra', 
        imageUrl: '/assets/headshots/Rahi.jpg',
        description: 'Computer Science & Economics | SEAS \'26'
      },
      { 
        name: 'Maximillian Comfere', 
        imageUrl: '/assets/headshots/Maximillian.jpg',
        description: 'Computer Engineering | SEAS \'26'
      }
    ]
  },
  {
    title: 'Business & Outreach Lead',
    leads: [
      { 
        name: 'Millie Takeda-Byrne', 
        imageUrl: '/assets/headshots/Millie.jpg',
        description: 'Biology & Economics | Barnard \'27'
      },
      { 
        name: 'Jessica Lee', 
        imageUrl: '/assets/headshots/Jessica.jpg',
        description: 'Engineering & Computer Science | Barnard \'27'
      },
      { 
        name: 'Kristi Lam', 
        imageUrl: '/assets/headshots/Kristi.jpg',
        description: 'Biomedical Engineering | SEAS \'27'
      }
    ]
  },
  {
    title: 'PR & Communications Lead',
    leads: [
      { 
        name: 'Chelsea Ekwughalu', 
        imageUrl: '/assets/headshots/Chelsea.jpg',
        description: 'Physics | Barnard \'27'
      },
      { 
        name: 'Heera Santhosh', 
        imageUrl: '/assets/headshots/Heera.jpg',
        description: 'Neuroscience & Behavior | CC \'28'
      }
    ]
  },
  {
    title: 'Secretary',
    leads: [
      { 
        name: 'Alana Kwan', 
        imageUrl: '/assets/headshots/Alana.jpg',
        description: 'Chemical Engineering & Computer Science | CC \'26'
      }
    ]
  }
];

const LeadershipSection: React.FC = () => {
  const allTeamMembers = leadershipData.flatMap(section => 
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

export const People: React.FC = () => (
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
      <LeadershipSection />
    </div>
  </div>
);