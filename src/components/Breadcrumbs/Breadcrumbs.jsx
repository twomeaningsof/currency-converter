import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import React from "react";

function ListItem({ className = "", children }) {
  return <li className={className}>{children}</li>;
}

function Breadcrumbs({ routes }) {
  const variant = routes.length === 1 ? "short" : "long";

  return (
    <nav>
      <ul className="navigation">
        {variant === "short" && (
          <ListItem className="navigation__element--active">
            {routes[0]}
          </ListItem>
        )}
        {variant === "long" &&
          routes.map((pageName, index) => {
            const withClass = index + 1 === routes.length;
            return index === 0 ? (
              <Link key={pageName} to="/" className="navigation__element">
                <ListItem>{pageName}</ListItem>
              </Link>
            ) : (
              <React.Fragment key={pageName}>
                <ListItem className="navigation__separator">/</ListItem>
                <ListItem
                  className={withClass && "navigation__element--active"}
                >
                  {pageName}
                </ListItem>
              </React.Fragment>
            );
          })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
