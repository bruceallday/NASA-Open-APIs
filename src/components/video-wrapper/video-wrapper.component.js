import  React from 'react'

const VideoWrapper = (props) => {
    const { url } = props
    return (
      <video width="320" height="240" controls>
        <source src={url}></source>
      </video>
    );
}

export default VideoWrapper