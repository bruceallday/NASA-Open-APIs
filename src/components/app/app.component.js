import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Header from '../header/header.component.js'
import RoversPage from '../marsroverpage/marsrover.component.js'
import PictureOfTheDay from '../APOD/apod.component.js'
import NearEarthObject from '../NeoWs/NearEarthObjects.component'
import './app.styles.scss'
import NearEarthObjects from '../NeoWs/NearEarthObjects.component'

const App = () => {
  console.log("APP_START")
    return (
      <div className="">
        <Router>
          <Header />
          <Switch>
            <Route path="/rovers">
              <RoversPage />
            </Route>

            <Route path="/apod">
              <PictureOfTheDay />
            </Route>

            <Route path="/NeoWs">
              <NearEarthObjects/>
            </Route>

            <Route path="/home">
              <Redirect to="/" />
            </Route>

            <Route path="/">
              <div>PAGE NOT FOUND</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;