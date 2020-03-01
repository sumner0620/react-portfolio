// import dependencies
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "../../style/sass/modules/_footer.scss";

export function Nav(props) {
  return (
    <footer className="main-footer flex row afs">
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
    </footer>
  );
}
