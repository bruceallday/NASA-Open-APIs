import React from 'react'
import { useStyles } from './page-title.styles'

const PageTitle = (props) =>{
    const classes = useStyles()

    const { title, subTitle } = props
    return (
      <div className={classes.root}>
        <p className={classes.pageTitle}>
          <span>{title}</span>
        </p>
        <p className={classes.pageSubTitle}>
          <span>{subTitle}</span>
        </p>
      </div>
    );
}

export default PageTitle