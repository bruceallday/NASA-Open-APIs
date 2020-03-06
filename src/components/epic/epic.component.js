import React, { useState, useEffect } from 'react'

import { useStyles } from './epic.styles'
import { LinearProgress } from '@material-ui/core'
import PageTitle from '../page-title/page-title.component'

const Epic = () => {

    const classes = useStyles()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        //API CALL HERE
    }, [])

    const getData = async () => {

        setData(null)
        setLoading(true)

        const result = await fetch(
            `https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY`
        )

        const data = await result.json()

        if (data.error) {
            console.log(data.error)
            setLoading(false)
        }

        
    }

    return(
        <div>
            {isLoading && <LinearProgress/>}
            <PageTitle 
                title={"EPIC"}
                subTitle={"Earth Polychromatic Imaging Camera"}/>
        </div>
    )
}

export default Epic