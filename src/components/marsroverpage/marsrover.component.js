import React, { useState } from 'react'

import SearchForm from '../searchform/searchform.component.js'
import RoverImages from "../roverimage/roverimage.component.js";

import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import LinearProgress from "@material-ui/core/LinearProgress"

import './marsrover.styles.scss'

const RoversPage = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
    const getData = async (date, camera, rover, sol) => {
      
        if(date === "" || camera === "" || rover === "") {
          alert("Please complete all fields")
          return
        }

        console.log("Date  "+ date)

        setData(null)
        setLoading(true)

        const result = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&page=1&api_key=`
        );

        const data = await result.json()

        if (data.error) {
          console.log(data.error);
          setLoading(false);

        } else if (data.photos < 1) {
          alert("No images on this camera, for this sol.");
          setLoading(false);
          return;

        } else {
          setData(data);
          setLoading(false);
          console.log("LANDING DATE: " + data[0])
        }
    }
        return (
          <div className="roverComponent">
            <SearchForm getData={getData} />

            <GridList cellHeight={"auto"}>
              {data ? (
                data.photos.map((item, i) => (
                  <GridListTile key={i}>
                    <RoverImages
                      key={i}
                      imageUrl={item.img_src}
                      solDate={item.sol}
                    />
                  </GridListTile>
                ))
              ) : (
                <p></p>
              )}
            </GridList>

            {isLoading ? <LinearProgress /> : <p></p>}
          </div>
        );
}

export default RoversPage
