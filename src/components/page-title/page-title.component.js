import React from 'react'
import { useStyles } from './page-title.styles'

const PageTitle = (props) =>{
    const classes = useStyles()

    const { title, subTitle } = props
    return (
      <div className={classes.root}>
        <div className={classes.pageTitle}>
          <span>{title}</span>
        </div>
        <p className={classes.pageSubTitle}>
          <span>{subTitle}</span>
        </p>
      </div>
    );
}

export default PageTitle