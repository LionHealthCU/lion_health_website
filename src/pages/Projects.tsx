import React, { useEffect } from 'react';
import { PageHero } from '../components/PageHero';

const projectsData = [
  {
    title: 'HARDWARE TEAM',
    year: 'Fall 2025-Present',
    projectName: 'Accessibility Devices',
    description: 'Developing medical device prototypes including assistive technologies for accessibility, mobility aids, and stability devices in partnership with TCC and Blythedale Children\'s Hospital.',
    purpose: 'All projects aim to improve accessibility, usability, and safety for individuals with impairments or disabilities.',
    aims: [
      'Eye-tracking device for assistive control',
      'Faster/easier suturing device (subcutaneous suture)',
      'Wearable hand movement detection device'
    ],
    goals: {
      shortTerm: 'Deliver functional medical or assistive devices within a semester',
      longTerm: 'NIH DEBUT competition submission and ongoing partnerships with healthcare facilities'
    },
    progress: 'Organizing teams, distributing projects, and planning CAD/prototyping workshops',
    nextSteps: 'Launch project teams, host technical workshops, and begin prototype development'
  },
  {
    title: 'SOFTWARE TEAM',
    year: 'Summer 2025-Present',
    projectName: 'SomniQ',
    description: 'A comprehensive iOS app that empowers users to track sleep episodes, record disturbances, and connect with a supportive community to address sleep disorders.',
    purpose: 'Address sleep disorders such as insomnia, sleep apnea, parasomnias, and conditions like sleepwalking, which affect millions and can pose serious injury risks. Traditional monitoring solutions are expensive, clinical, or unsustainable.',
    aims: [
      'Provide an intuitive iOS app for tracking and monitoring sleep',
      'Capture audio during sleep for disturbance detection',
      'Build a supportive community platform'
    ],
    goals: {
      shortTerm: 'Deliver app with core features (sleep logging, audio recording, symptom tracking, data visualization, HealthKit integration, Firebase storage, community features)',
      longTerm: 'Integrate AI insights, enable wearable compatibility, and collaborate with healthcare providers to enhance sleep health and safety'
    },
    progress: 'Core app structure completed in SwiftUI. Logging, audio recording/playback, and visualization functional. Privacy and security measures implemented.',
    nextSteps: 'Testing, iteration, and public launch',
    link: 'https://github.com/LionHealthCU/sleep_disorder_app'
  },
  {
    title: 'PUBLIC RELATIONS TEAM',
    year: 'Fall 2025-Present',
    projectName: 'The Mane Frame',
    description: 'Columbia\'s first human-centered publication documenting LionHealth projects, members, and scientific achievements in biomedical engineering and global health.',
    purpose: 'There are currently no human- and story-centered medical engineering, physics, or global health magazines on campus. LionHealth needs a more narrative platform to demonstrate respectability and creativity as an organization.',
    aims: [
      'Create an online site and physical zine for documenting photographs and stories about each team',
      'Highlight projects and members',
      'Provide scientific background articles connected to each department\'s projects',
      'Offer a creative, approachable, and human-centered platform for science communication'
    ],
    progress: 'First issue planning underway with interviews and narrative articles in progress',
    nextSteps: 'Begin interviews for articles, publish first issue'
  },
  {
    title: 'BUSINESS TEAM',
    year: 'Fall 2025-Present',
    projectName: 'Partnerships & Funding',
    description: 'Building partnerships with organizations, securing grants, and providing career development resources to support LionHealth\'s mission and growth.',
    purpose: 'Secure funding for projects, build partnerships with companies/hospitals/nonprofits, and provide career development resources.',
    aims: [
      'Find funding and sponsors',
      'Create partnerships for events and site visits',
      'Run career workshops'
    ],
    goals: {
      shortTerm: 'Finalize outreach email templates, sponsorship packet, and apply for first grants (including NIH DEBUT)',
      longTerm: 'Build a steady funding pipeline, form ongoing partnerships, create a sustainable career support system, and improve task allocation'
    },
    progress: 'Outreach templates drafted, sponsorship packet started, and career interest forms circulated',
    nextSteps: 'Finish outreach materials, plan networking/speaker event, and organize career workshops'
  }
];

const pastProjectsData = [
  {
    title: 'SUTURING DEVICE',
    year: 'Summer 2025',
    projectName: 'Subcutaneous Suturing Device',
    description: 'Hardware project focused on developing an innovative suturing device with multiple iterations and comprehensive CAD models.',
    purpose: 'Improve surgical suturing procedures with a faster and easier subcutaneous suture device.',
    aims: [
      'Multiple prototype iterations completed',
      'CAD models developed and refined',
      'Testing and validation in progress'
    ],
    progress: 'v1, v2, and v3 prototypes completed with comprehensive CAD documentation',
    nextSteps: 'Testing, refinement, and potential NIH DEBUT submission'
  },
  {
    title: 'GESTURE CONTROLLER',
    year: 'Summer 2025',
    projectName: 'Assistive Gesture Control Device',
    description: 'An assistive technology device designed to enable gesture-based control for improved accessibility and interaction.',
    purpose: 'Enable users with mobility impairments to control devices through gesture recognition.',
    aims: [
      'Gesture recognition technology',
      'Integration with assistive devices',
      'User-friendly interface development'
    ],
    progress: 'Core functionality developed and tested',
    nextSteps: 'Continued refinement and user testing'
  },
  {
    title: 'EYE TRACKER',
    year: 'Summer 2025',
    projectName: 'Optical Eye Tracking System',
    description: 'Optical tracking system designed for monitoring and assisting users through advanced eye movement detection.',
    purpose: 'Provide assistive control through eye movement tracking for users with limited mobility.',
    aims: [
      'Precise eye movement detection',
      'Optical path optimization',
      'Real-time control integration'
    ],
    progress: 'Optical design completed, testing jigs developed, and initial calibration performed',
    nextSteps: 'Further testing and integration with assistive devices'
  }
];

const ProjectNavigation: React.FC<{ currentProjects: typeof projectsData, pastProjects: typeof pastProjectsData }> = ({ currentProjects, pastProjects }) => {
  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = 50; // 100px offset from top
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('project-nav');
      const projectsContent = document.querySelector('.projects-content');
      
      if (nav && projectsContent) {
        const scrolled = window.scrollY;
        const contentTop = (projectsContent as HTMLElement).offsetTop || 0;
        
        // Position nav to align with content top (where "Current Projects" title is)
        nav.style.position = 'fixed';
        nav.style.top = `${Math.max(100, contentTop - scrolled + 80)}px`;
        nav.style.left = '20px';
      }
    };

    // Wait for content to load and set initial position
    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="project-nav"
      style={{
        position: 'fixed',
        top: '200px',
        left: '20px',
        zIndex: 100,
        width: '200px'
      }}
    >
      <div style={{
        fontWeight: 'var(--weight-bold)',
        fontSize: '1rem',
        color: 'var(--teal)',
        marginBottom: 'var(--space-4)',
        paddingBottom: 'var(--space-2)',
        borderBottom: '1px solid var(--teal)'
      }}>
        Current Projects
      </div>
      {currentProjects.map((project, index) => (
        <button
          key={`current-${index}`}
          onClick={() => scrollToProject(`project-${index}`)}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: 'var(--space-2) var(--space-4)',
            marginBottom: 'var(--space-2)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--navy)',
            fontSize: '0.85rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--teal)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy)'}
        >
          {project.projectName}
        </button>
      ))}
      
      <div style={{
        fontWeight: 'var(--weight-bold)',
        fontSize: '1rem',
        color: 'var(--teal)',
        marginTop: 'var(--space-6)',
        marginBottom: 'var(--space-4)',
        paddingTop: 'var(--space-4)',
        paddingBottom: 'var(--space-2)',
        borderTop: '1px solid var(--teal)',
        borderBottom: '1px solid var(--teal)'
      }}>
        Past Projects
      </div>
      {pastProjects.map((project, index) => (
        <button
          key={`past-${index}`}
          onClick={() => scrollToProject(`past-project-${index}`)}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: 'var(--space-2) var(--space-4)',
            marginBottom: 'var(--space-2)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--navy)',
            fontSize: '0.85rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--teal)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy)'}
        >
          {project.projectName}
        </button>
      ))}
    </div>
  );
};

const ProjectDetail: React.FC<{ project: typeof projectsData[0]; id: string; showNextSteps?: boolean }> = ({ project, id, showNextSteps = true }) => (
  <div id={id} className="project-detail" style={{ 
    maxWidth: '1200px', 
    margin: '0 auto',
    padding: 'var(--space-16) 0',
    marginTop: 'var(--space-16)',
    borderTop: '2px solid var(--teal)',
    paddingTop: 'var(--space-12)'
  }}>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 'var(--space-6)'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 'var(--weight-bold)',
        color: 'var(--navy)',
        margin: 0
      }}>
        {project.projectName}
      </h2>
      <span style={{ 
        fontSize: '1.2rem', 
        color: 'var(--teal)',
        fontWeight: 'var(--weight-semibold)'
      }}>
        {project.year}
      </span>
    </div>
    
    <p style={{ 
      fontSize: '1.1rem', 
      lineHeight: '1.7',
      marginBottom: 'var(--space-6)',
      color: 'var(--navy)',
      opacity: 0.9
    }}>
      {project.description}
    </p>
    
    <h4 style={{ 
      fontSize: '1.2rem', 
      fontWeight: 'var(--weight-bold)',
      color: 'var(--teal)',
      marginTop: 'var(--space-8)',
      marginBottom: 'var(--space-4)'
    }}>
      Purpose
    </h4>
    <p style={{ 
      fontSize: '1rem', 
      lineHeight: '1.6',
      marginBottom: 'var(--space-6)',
      color: 'var(--navy)'
    }}>
      {project.purpose}
    </p>
    
    <h4 style={{ 
      fontSize: '1.2rem', 
      fontWeight: 'var(--weight-bold)',
      color: 'var(--teal)',
      marginTop: 'var(--space-6)',
      marginBottom: 'var(--space-4)'
    }}>
      Aims
    </h4>
    <ul style={{ 
      fontSize: '1rem', 
      lineHeight: '1.8',
      marginBottom: 'var(--space-6)',
      color: 'var(--navy)',
      paddingLeft: 'var(--space-8)'
    }}>
      {project.aims.map((aim, index) => (
        <li key={index} style={{ marginBottom: 'var(--space-2)' }}>
          {aim}
        </li>
      ))}
    </ul>
    
    {project.goals && (
      <>
        <h4 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'var(--weight-bold)',
          color: 'var(--teal)',
          marginTop: 'var(--space-6)',
          marginBottom: 'var(--space-4)'
        }}>
          Goals
        </h4>
        <p style={{ 
          fontSize: '1rem', 
          lineHeight: '1.6',
          marginBottom: 'var(--space-2)',
          color: 'var(--navy)',
          fontWeight: 'var(--weight-semibold)'
        }}>
          Short-Term: {project.goals.shortTerm}
        </p>
        <p style={{ 
          fontSize: '1rem', 
          lineHeight: '1.6',
          marginBottom: 'var(--space-6)',
          color: 'var(--navy)',
          fontWeight: 'var(--weight-semibold)'
        }}>
          Long-Term: {project.goals.longTerm}
        </p>
      </>
    )}
    
    <h4 style={{ 
      fontSize: '1.2rem', 
      fontWeight: 'var(--weight-bold)',
      color: 'var(--teal)',
      marginTop: 'var(--space-6)',
      marginBottom: 'var(--space-4)'
    }}>
      Progress
    </h4>
    <p style={{ 
      fontSize: '1rem', 
      lineHeight: '1.6',
      marginBottom: 'var(--space-6)',
      color: 'var(--navy)'
    }}>
      {project.progress}
    </p>
    
    {showNextSteps && (
      <>
        <h4 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'var(--weight-bold)',
          color: 'var(--teal)',
          marginTop: 'var(--space-6)',
          marginBottom: 'var(--space-4)'
        }}>
          Next Steps
        </h4>
        <p style={{ 
          fontSize: '1rem', 
          lineHeight: '1.6',
          marginBottom: 'var(--space-6)',
          color: 'var(--navy)'
        }}>
          {project.nextSteps}
        </p>
      </>
    )}
    
    {project.link && (
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ marginTop: 'var(--space-8)' }}
      >
        View Repository
      </a>
    )}
  </div>
);

export const Projects: React.FC = () => (
  <div className="page">
    <PageHero 
      title="Our Projects" 
      subtitle="Innovative healthcare solutions making a global impact" 
    />

    <ProjectNavigation currentProjects={projectsData} pastProjects={pastProjectsData} />
    
    <div className="projects-content" style={{ 
      backgroundColor: 'var(--white)', 
      padding: 'var(--space-20) var(--space-8)',
      marginLeft: '240px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        padding: '0'
      }}>
        {/* Current Projects */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'var(--weight-bold)',
          color: 'var(--navy)',
          marginBottom: 'var(--space-16)',
          textAlign: 'center'
        }}>
          Current Projects
        </h1>
        
        {projectsData.map((project, index) => (
          <ProjectDetail key={index} project={project} id={`project-${index}`} />
        ))}
        
        {/* Past Projects */}
        <div style={{
          borderTop: '2px solid var(--teal)',
          marginTop: 'var(--space-20)',
          paddingTop: 'var(--space-20)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--navy)',
            marginBottom: 'var(--space-16)',
            textAlign: 'center'
          }}>
            Past Projects
          </h1>
          
        {pastProjectsData.map((project, index) => (
            <ProjectDetail key={`past-${index}`} project={project} id={`past-project-${index}`} showNextSteps={false} />
          ))}
        </div>
      </div>
    </div>
  </div>
);