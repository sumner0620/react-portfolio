// import dependencies
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "../../style/sass/modules/_footer.scss";

export const Nav = () => {
  return (
    <footer className="main-footer flex row afs">
      <div className="container">
        <nav>
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/testimonials">testimonials</Link>
        </nav>
      </div>
    </footer>
  );
};
