import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'white' | 'gradient';
  contentCenter?: boolean;
  reducedSpacing?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  contentCenter = false,
  reducedSpacing = false
}) => {
  const sectionClass = `section ${variant === 'white' ? 'bg-white' : variant === 'gradient' ? 'bg-gradient-primary' : ''}`;
  const contentClass = contentCenter ? 'text-center' : '';
  const titleColor = variant === 'white' ? 'text-navy' : 'text-white';
  const subtitleColor = variant === 'white' ? 'text-navy' : 'text-muted';

  const paddingTop = reducedSpacing ? '0' : 'var(--space-20)';
  const paddingBottom = 'var(--space-20)';

  return (
    <section className={sectionClass} style={{ paddingTop, paddingBottom }}>
      <div className="container">
        <div className={contentClass}>
          {title && (
            <h2 
              className={`text-display-2 ${titleColor}`}
              style={{ fontSize: '3rem', fontWeight: 'var(--weight-bold)' }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`text-body-large ${subtitleColor}`} style={{ marginTop: 'var(--space-4)', maxWidth: '700px', margin: 'var(--space-4) auto 0', opacity: variant === 'white' ? 0.8 : 1 }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
