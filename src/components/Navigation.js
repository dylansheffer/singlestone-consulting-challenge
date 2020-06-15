import React from 'react';
import { Logo } from './Logo';
import { ContentContainer } from './ContentContainer';
import { SkipLink } from './SkipLink';

export const Navigation = () => (
  <div className="navigation">
    <SkipLink />
    <nav>
      <ContentContainer>
        <ul className="semantic-list">
          <li>
            <a href="/" aria-label="Home">
              <Logo />
            </a>
          </li>
        </ul>
      </ContentContainer>
    </nav>
  </div>
)