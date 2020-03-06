import React, { useState, useEffect } from 'react'

import PageTitle from '../page-title/page-title.component'
import API_KEY from '../../api-key'

import { useStyles } from './insight.styles'
import { LinearProgress } from '@material-ui/core'

const Insight = () => {

    const classes = useStyles()
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => { 

        setData(null)
        setLoading(true)

        const result = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY.apiKey}&feedtype=json&ver=1.0`)

        const data = await result.json()

        if (data.error) {
            console.log(data.error)
            setLoading(false)
        }else{
            setData(data)
            setLoading(false)
            console.log("DATA", data)
        }

    }

    return(

        <div>
            {isLoading && <LinearProgress />}
            <PageTitle 
                title="Insight"
                subTitle="Mars Weather Service API"
            />


            
        </div>
        

    )
}

export default Insight