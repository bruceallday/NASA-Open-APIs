import React from 'react'

import { useStyles } from '../APOD/apod.styles'

const ImageWrapper = (props) => {
    const style = useStyles()
    const { url } = props
    return (
      <img className={style.imageOfTheDay} src={url} alt="pic of the day" />
    );
}

export default ImageWrapper