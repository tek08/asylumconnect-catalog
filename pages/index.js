import React from "react";
import { Link } from "../routes";

import Header from "../components/Header";

const IndexPage = () => (
  <div>
    <Header />
    <h1>Asylum Connect Catalog</h1>
    <Link route="/account">
      <a>Account page link</a>
    </Link>
  </div>
);

export default IndexPage;
