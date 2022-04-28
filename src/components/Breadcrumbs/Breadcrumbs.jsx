import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import React from "react";

function Breadcrumbs({ routes }) {
  const variant = routes.length === 1 ? "short" : "long";
  const [homePage, detailsPage] = routes;
  const activePage = variant === "short" ? homePage : detailsPage;

  return (
    <nav>
      <ul className="navigation">
        {variant === "long" && (
          <>
            <Link to="/" className="navigation__link">
              <li className="navigation__item">{homePage}</li>
            </Link>
            <li className="navigation__separator">/</li>
          </>
        )}
        <li className="navigation__item--active">{activePage}</li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
