import React from 'react'

const ImageWrapper = (props) => {
    const { url } = props
    return (
      <img className="image-of-the-day" src={url} alt="pic of the day" />
    );
}

export default ImageWrapper