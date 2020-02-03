import React, { useState } from 'react'

import PageTitle from '../page-title/page-title.component'

import { useStyles } from './NearEarthObjects.styles'

const NearEarthObjects = () => {
    const classes = useStyles()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)


    return (
      <div className={classes.root}>
        <PageTitle
          title={"Asteroids - NeoWs"}
          subTitle={"Near Earth Object Web Service"}
        />
      </div>
    );
}

export default NearEarthObjects