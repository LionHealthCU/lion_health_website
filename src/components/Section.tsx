import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'white' | 'gradient';
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
  subtitleClassName?: string;
  contentCenter?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
  style = {},
  titleClassName = '',
  subtitleClassName = '',
  contentCenter = false,
}) => {
  const sectionClass = `section ${variant === 'white' ? 'bg-white' : variant === 'gradient' ? 'bg-gradient-primary' : ''} ${className}`;
  const contentClass = contentCenter ? 'text-center' : '';
  const titleColor = variant === 'white' ? 'text-navy' : 'text-white';
  const subtitleColor = variant === 'white' ? 'text-navy' : 'text-muted';

  return (
    <section className={sectionClass} style={style}>
      <div className="container">
        <div className={contentClass}>
          {title && <h2 className={`text-display-2 ${titleColor} ${titleClassName}`}>{title}</h2>}
          {subtitle && (
            <p 
              className={`text-body-large ${subtitleColor} ${subtitleClassName}`} 
              style={{ 
                marginTop: 'var(--space-4)', 
                maxWidth: '700px', 
                margin: 'var(--space-4) auto 0', 
                opacity: variant === 'white' ? 0.8 : 1 
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};