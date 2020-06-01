// import dependencies
import React, {Suspense, lazy} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { browserHistory } from "react-router";

// import components
import { Sidebar } from "./Sidebar.js";
import { Nav } from "./Footer.js";

// routes
const Projects = lazy(() => import("../pages/Projects"))
const Home = lazy(() => import("../pages/Home"))
const Testimonials = lazy(() => import("../pages/Testimonials"))
// import { Projects } from "../pages/Projects.js";
// import { Home } from "../pages/Home.js";
// import { Testimonials } from "../pages/Testimonials.js";

// import styles
import "../../style/sass/partials/_normalize.scss";
import "../../style/sass/fonts.scss";
import "../../style/sass/partials/_base.scss";
import "../../style/sass/partials/_mixins.scss";
import "../../style/sass/partials/_flex.scss";
import "../../style/sass/modules/_quote.scss";
import "../../style/sass/modules/_slide.scss"

export const Main = () => {
  const ref = React.useRef();

  return (
    <main ref={ref}>
      <Sidebar />
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Switch>
          <Route name="Home" exact path="/" component={Home}>
            <Home />
          </Route>
          <Route name="Projects" path="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route
            name="Testimonials"
            path="/testimonials"
            component={Testimonials}
          >
            <Testimonials />
          </Route>
        </Switch>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};
