import React, { useState, useEffect } from 'react'
import API_KEY from "../../api-key.js";

import PageTitle from '../page-title/page-title.component'

import { useStyles } from './NearEarthObjects.styles'

const NearEarthObjects = () => {
    const classes = useStyles()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
      getData()
    }, [])
    
    const getData = async () => {
      setData(null)
      setLoading(true)

      const result = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY.apiKey}`
      );

      const formattedData = await result.json();

      console.log(formattedData);
    }

    return (
      <div className={classes.root}>
        <PageTitle
          title={"NeoWs"}
          subTitle={"Near Earth Object Web Service"}
        />
      </div>
    );
}

export default NearEarthObjects