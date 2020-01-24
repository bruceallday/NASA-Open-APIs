import React, { useState } from 'react'
import Loader from '../loader/loader.component.js'
import Grid from '@material-ui/core/Grid'

import RoverImages from '../roverimage/roverimage.component.js'
import SearchForm from '../searchform/searchform.component.js'

import './app.styles.css'


const App = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)


    const getData = (sol, camera, rover) => {
        console.log("UPDATED_APP")
        setData(null)
        setLoading(true)

        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=1&api_key=unwJcljHmbUCbFdgeIzK7VeAQCsWGDACb2Fp0AK4`)
            .then((result) => {
                return result.json();

            }).then((data) => {
                console.log('noerror');
                console.log(data)
                // setLoading(false)

                if(data.error){
                    console.log(data.error)
                    setLoading(false)

                } else if (data.photos < 1){
                    console.log("EMPTY_ARRAY")
                    alert("No images for this sol")
                    setLoading(false)
                    return

                }else{
                    setData(data);
                    console.log(data)
                    setLoading(false)
                }
            })
    }

    return (
        <div className="app">
            <img className="nasa-logo" src="http://www.collectspace.com/images/news-080513c-lg.jpg" alt='logo'/>

            <SearchForm getData={getData} />
        
            <div className="imgContainer">




            <Grid container spacing={3}>

                {data ? data.photos.map((img, i) =>
                    <Grid item>
                    <RoverImages
                        key={i}
                        imageUrl={img.img_src}/>
                    </Grid>)

                    : <Loader isLoading={isLoading} />}
            </Grid>








            </div>
        </div>
    )
}

export default App;