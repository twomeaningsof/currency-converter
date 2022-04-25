import "./Breadcrumbs.css";
import { Link } from "react-router-dom";

function Breadcrumbs({ route }) {
  const variant = route.length === 1 ? "short" : "long";
  let toRender;

  if (variant === "short") {
    toRender = (
      <li key={route[0]} className="navigation__element--active">
        {route[0]}
      </li>
    );
  } else {
    toRender = route.map((pageName, index) => {
      const className =
        index + 1 === route.length
          ? "navigation__element--active"
          : "navigation__element";

      const base = (
        <li key={pageName} className={className}>
          {pageName}
        </li>
      );

      if (index) {
        return (
          <>
            <li
              key={`Separator-${index + 1}`}
              className="navigation__separator"
            >
              /
            </li>
            {base}
          </>
        );
      } else {
        return <Link to="/">{base}</Link>;
      }
    });
  }

  return (
    <nav>
      <ul className="navigation">{toRender}</ul>
    </nav>
  );
}

export default Breadcrumbs;
