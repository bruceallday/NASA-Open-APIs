import React, { useState } from 'react'
import Loader from '../loader/loader.component.js'

import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import RoverImages from '../roverimage/roverimage.component.js'
import SearchForm from '../searchform/searchform.component.js'

import './app.styles.css'



const App = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const getData = (sol, camera, rover) => {
        setData(null)
        setLoading(true)

        fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=1&api_key=unwJcljHmbUCbFdgeIzK7VeAQCsWGDACb2Fp0AK4`
        )
          .then(result => {
            return result.json();
          })
          .then(data => {
            console.log(data);

            if (data.error) {
                console.log(data.error);
                setLoading(false);

            } else if (data.photos < 1) {
                console.log("EMPTY_ARRAY");
                alert("No images on this camera, for this sol.");
                setLoading(false);
              return;

            } else {
                setData(data);
                setLoading(false);
                
            }
          });
    }

    console.log(data)

    return (
      <div className="app">
        <img
          className="nasa-logo"
          src="http://www.collectspace.com/images/news-080513c-lg.jpg"
          alt="logo"
        />

        <SearchForm getData={getData} />

        <GridList cellHeight="100%">
          {data ? (
            data.photos.map((item, i) => (
              <GridListTile key={i} item>
                <RoverImages
                  key={i}
                  imageUrl={item.img_src}
                  earthDate={item.earth_date}
                />
              </GridListTile>
            ))
          ) : (
            <Loader key={0} isLoading={isLoading} />
          )}
        </GridList>
      </div>
    );
}

export default App;