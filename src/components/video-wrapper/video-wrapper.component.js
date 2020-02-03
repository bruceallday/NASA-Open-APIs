import  React from 'react'

const VideoWrapper = (props) => {
    const { url } = props
    return (
      <div>
        <a style={{textDecoration: 'none'}} href={url}>Watch video here</a>
{/*        <video width="320" height="240" controls>
          <source src={url}></source>
    </video>*/}
      </div>
    );
}

export default VideoWrapper