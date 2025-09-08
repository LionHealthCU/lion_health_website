import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageText: string;
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
  linkText = 'Learn More →',
  linkHref = '#',
  animationDelay = '0s',
  variant = 'default',
  animation = 'slide-up',
  children
}) => (
  <div className={`card ${variant === 'white' ? 'card-white' : ''} animate-${animation}`} style={{ animationDelay }}>
    <div className="card-visual">
      <div className="placeholder-image">
        <span>{imageText}</span>
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      {children}
      <p className="card-description">{description}</p>
      <a href={linkHref} className="card-link">{linkText}</a>
    </div>
  </div>
);