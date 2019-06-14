import React from "react";
import { Link } from "../routes";

import Header from "../components/Header";

const AccountPage = () => (
  <div>
    <Header />
    <h1>Asylum Connect Catalog</h1>
    <p>Account page will be here</p>
    <Link route="/">
      <a>Link back to `/`</a>
    </Link>
  </div>
);

export default AccountPage;
