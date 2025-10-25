import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageText: string;
  imageUrl?: string;
  linkText?: string;
  linkHref?: string;
  animationDelay?: string;
  variant?: 'default' | 'white';
  animation?: 'slide-up' | 'slide-left' | 'slide-right';
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageText,
  imageUrl,
  linkText = 'Learn More →',
  linkHref = '#',
  animationDelay = '0s',
  variant = 'default',
  animation = 'slide-up',
  children
}) => (
  <div className={`card ${variant === 'white' ? 'card-white' : ''} animate-${animation}`} style={{ animationDelay }}>
    <div className="card-visual">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={title}
          className="card-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'var(--radius-md)'
          }}
        />
      ) : (
        <div className="placeholder-image">
          <span>{imageText}</span>
        </div>
      )}
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      {children}
      <p className="card-description">{description}</p>
      <a href={linkHref} className="card-link">{linkText}</a>
    </div>
  </div>
);