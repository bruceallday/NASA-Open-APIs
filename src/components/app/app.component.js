import React from 'react'

import useStyles from './app.styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Header from '../header/header.component'
import RoversPage from '../marsroverpage/marsrover.component'
import PictureOfTheDay from '../APOD/apod.component'
import NearEarthObjects from "../NeoWs/NearEarthObjects.component"
import Earth from '../earth/earth.component'
import Epic from '../epic/epic.component'

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
              <NearEarthObjects />
            </Route>

            <Route path="/epic" >
              <Epic />
            </Route>

            <Route path='/earth'>
              <Earth />
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
    )
}

export default App;