import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => (
  <section className="page-hero">
    <div className="container">
      <h1 className="text-display-1 text-white">{title}</h1>
      <p className="text-body-large text-muted">{subtitle}</p>
    </div>
  </section>
);