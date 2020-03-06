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