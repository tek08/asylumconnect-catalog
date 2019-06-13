import React from "react";
import { Link } from "../routes";

const IndexPage = () => (
  <div>
    <h1>Asylum Connect Catalog</h1>
    <Link route="/account">
      <a>Account page link</a>
    </Link>
  </div>
);

export default IndexPage;
