import React from 'react'

import Header from '../header/header.component.js'
import RoversPage from '../marsroverpage/marsrover.component.js'

import './app.styles.scss'


const App = () => {

  console.log("APP_START")

    return (
      <div className="">

        <Header />
        <RoversPage/>
        
      </div>

    );
}

export default App;