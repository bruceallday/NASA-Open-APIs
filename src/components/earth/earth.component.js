import React from 'react'

import PageTitle from '../page-title/page-title.component.js'

import { useStyles } from './earth.styles'

const Earth = () => {
    
    const classes = useStyles()

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