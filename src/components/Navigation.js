import React from 'react';
import { Link } from '@reach/router';
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
            <Link to="/" aria-label="Home">
              <Logo />
            </Link>
          </li>
        </ul>
      </ContentContainer>
    </nav>
  </div>
)