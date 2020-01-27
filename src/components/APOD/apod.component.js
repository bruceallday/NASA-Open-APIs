import React, { useState, useEffect } from 'react'

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
            `https://api.nasa.gov/planetary/apod?api_key=`
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
            <img className="image-of-the-day" src={data.hdurl} alt="pic of the day" />
            <h2 className="image-of-the-day" >{data.title}</h2>
            <p className="image-of-the-day">{data.explanation}</p>
            <br/>

            </div>
            : <p></p>}
                  
      </div>
    );
}

export default PictureOfTheDay