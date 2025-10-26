import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageText: string;
  animationDelay?: string;
  variant?: 'default' | 'white';
  animation?: 'slide-up' | 'slide-left' | 'slide-right';
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageText,
  animationDelay = '0s',
  variant = 'default',
  animation = 'slide-up'
}) => (
  <div className={`card ${variant === 'white' ? 'card-white' : ''} animate-${animation}`} style={{ animationDelay }}>
    <div className="card-visual">
      <div className="placeholder-image">
        <span>{imageText}</span>
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);