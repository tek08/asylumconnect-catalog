import React from 'react';
import { Link } from '../../routes';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link route="/">
          <a>Logo</a>
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
