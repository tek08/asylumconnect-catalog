import React from 'react';
import { Link } from '../../routes';
import { Avatar } from '@material-ui/core';
import theme from '../theme';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link route="/">
          <img src="/images/asylum-connect-logo.png" title="Asylum Connect" alt="Asylum Connect" style={{width: '100px'}} />
        </Link>
      </li>
      <li>
        <Link route="/">
          <a>Log In</a>
        </Link>
      </li>
      <li>
        <Link route="/">
          <a>Sign up</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
