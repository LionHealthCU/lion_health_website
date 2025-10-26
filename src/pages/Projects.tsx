import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/PageHero';

interface Project {
  title: string;
  year: string;
  projectName: string;
  description: string;
  purpose: string;
  aims: string[];
  goals?: {
    shortTerm: string;
    longTerm: string;
  };
  progress: string;
  nextSteps: string;
  link?: string;
}

const Projects: React.FC = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [pastProjectsData, setPastProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/data/projects.json').then(res => res.json()),
      fetch('/data/past-projects.json').then(res => res.json())
    ])
      .then(([current, past]) => {
        setProjectsData(current);
        setPastProjectsData(past);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading projects data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page">
        <PageHero 
          title="Our Projects" 
          subtitle="Innovative healthcare solutions making a global impact" 
        />
        <div style={{ 
          backgroundColor: 'var(--white)', 
          padding: 'var(--space-20)',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--navy)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  const ProjectNavigation: React.FC = () => {
    const scrollToProject = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = 50;
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
          
          nav.style.position = 'fixed';
          nav.style.top = `${Math.max(100, contentTop - scrolled + 80)}px`;
          nav.style.left = '20px';
        }
      };

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
        {projectsData.map((project, index) => (
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
        {pastProjectsData.map((project, index) => (
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

  const ProjectDetail: React.FC<{ project: Project; id: string; showNextSteps?: boolean }> = ({ project, id, showNextSteps = true }) => (
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

  return (
    <div className="page">
      <PageHero 
        title="Our Projects" 
        subtitle="Innovative healthcare solutions making a global impact" 
      />

      <ProjectNavigation />
      
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
};

export default Projects;