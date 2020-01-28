import React, { useState, useEffect } from 'react'
import API_KEY from '../../api-key.js'

import LinearProgress from "@material-ui/core/LinearProgress";

import './apod.styles.scss'

const PictureOfTheDay = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
      getImage()
    }, [])

    const getImage = async () => {

        setData(null)
        setLoading(true)

        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY.apiKey}`
        )

        const data = await result.json()

        if(data.error){
            console.log(data.error)
            setLoading(false)
        }else{
            setData(data)
            setLoading(false)
          console.log(data.url)
            
        }
    }

    console.log(data)
    
    return (
      <div className="apodSection">
        {isLoading ? <LinearProgress /> : <p></p>}
        {data ? 
          <div>
            <p> <span className="pageTitle" >APOD</span> <span className="pageSubTitle" > ( Astronomy pic of the day )</span> </p>
            <h2 className="image-of-the-day" >{data.title}</h2>
            <p className="image-of-the-day">{data.explanation}</p>
            <img className="image-of-the-day" src={data.hdurl} alt="pic of the day" />
            <br/>
            
            </div>
            : <p></p>}
                  
      </div>
    );
}

export default PictureOfTheDay