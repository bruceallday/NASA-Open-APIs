import React, { useState, useEffect } from 'react'

import { useStyles } from './media-library.styles'
import PageTitle from '../page-title/page-title.component'

import API_KEY from '../../api-key'
import { LinearProgress } from '@material-ui/core'
import { set } from 'date-fns'

const MediaLIbrary = () => {

    const classes = useStyles()
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () =>{

        setData(null)
        setLoading(true)

        const result = await fetch(`https://images-api.nasa.gov/search?q=apollo%2011...`)
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
            {isLoading && <LinearProgress/>}
            <PageTitle 
                title="Media Library"
                subTitle="NASA Image and Video Library"
            />
            
        </div>
    )
}

export default MediaLIbrary
