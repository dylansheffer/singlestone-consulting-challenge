import React from 'react';
import { ContentContainer } from '../components/ContentContainer';
import { Link } from '@reach/router';

export const GetStarted = () => (
  <ContentContainer>
    <h1>
      Outside of Scope
      <span role="img" aria-label="winky face.">😜</span>
    </h1>
    <Link to="/">
      Return to Home
      <span role="img" aria-label="broken down house.">🏚️</span>
    </Link>
  </ContentContainer>
);