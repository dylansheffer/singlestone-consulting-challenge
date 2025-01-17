import React from 'react';
import { ContentContainer } from './ContentContainer';
import { Link } from '@reach/router';

export const Hero = () => (
  <section className="hero">
    <ContentContainer className="hero__content">
      <h1 className="visually-hidden">Endless</h1>
      <h2 className="hero__title">
        <div className="hero__title--small">New Games & Accessories</div>
        <div>Monthly packages.</div>
        <div>Excitement delivered daily.</div>
      </h2>
      <p className="hero__text">
        What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep ― every month.
      </p>
      <Link className="hero__cta cta" to="/get-started">Get Started</Link>
    </ContentContainer>
  </section>
);