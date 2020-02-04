import React, { useState, useEffect } from 'react'
import API_KEY from '../../api-key'

import PageTitle from '../page-title/page-title.component.js'

import { useStyles } from './earth.styles'

const Earth = () => {
    
    const classes = useStyles()
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState()

    useEffect(() => {
      getData()
    }, [])

    const getData = async () => {
      setData(null);
      setLoading(true);

      const result = await fetch(
       ` https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=${API_KEY.apiKey}`
      )

      const data = await result.json();

      if (data.error) {
        console.log(data);
        setLoading(false);
      } else {
        setData(data);
        setLoading(false);
        console.log(data);
      }
    }

    return (
      <div>
        <PageTitle
          title={"Earth"}
          subTitle={"Unlock the significant public investment in earth observation data"
          }
        />
      </div>
    )
}

export default Earth