import React, { useState, useEffect } from 'react'
import API_KEY from '../../api-key.js'

import PageTitle from '../page-title/page-title.component.js'
import ImageWrapper from '../image-wrapper/image-wrapper.component'
import VideoWrapper from '../video-wrapper/video-wrapper.component'

import LinearProgress from "@material-ui/core/LinearProgress"


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

    const formatDate = (date) => {
      return Date(date)
    }

    console.log(data)
    
    return (
      <div className="apodSection">
        {isLoading ? <LinearProgress /> : <p></p>}
        {data ? (
          <div>
            <PageTitle
              title={"APOD"}
              subTitle={"Astronomy picture of the day"}
            />
            <p className="photoDate">{formatDate(data.date)}</p>
            <h2 className="image-of-the-day">{data.title}</h2>
            <p className="image-of-the-day">{data.explanation}</p>

            {/*<ImageWrapper url={data.hdurl} />*/}

            {data.media_type === "video" ? (
              <VideoWrapper url={data.url} />
            ) : (
              <ImageWrapper url={data.hdurl} />
            )}

            {/*<img className="image-of-the-day" src={} alt="pic of the day" />*/}
            <br />
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
}

export default PictureOfTheDay