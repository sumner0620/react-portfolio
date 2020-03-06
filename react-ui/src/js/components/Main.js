// import dependencies
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { browserHistory } from 'react-router'

// import components
import { Sidebar } from './Sidebar.js'
import { Nav } from './Footer.js'
import { Projects } from '../pages/Projects.js'
import { Home } from '../pages/Home.js'
import { Testimonials } from '../pages/Testimonials.js'

// import styles
import '../../style/sass/partials/_normalize.scss'
import '../../style/sass/fonts.scss'
import '../../style/sass/partials/_base.scss'
import '../../style/sass/partials/_mixins.scss'
import '../../style/sass/partials/_flex.scss'

export const Main = () => {
  const ref = React.useRef()

  return (
    <main ref={ref}>
      <Sidebar />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route name='Home' exact path='/' component={Home}>
            <Home />
          </Route>
          <Route name='Projects' path='/projects' component={Projects}>
            <Projects />
          </Route>
          <Route
            name='Testimonials'
            path='/testimonials'
            component={Testimonials}
          >
            <Testimonials />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}
