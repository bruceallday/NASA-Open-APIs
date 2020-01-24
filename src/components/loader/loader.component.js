import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

const Loader = (props) => {

    return(
        <div>
            {props.isLoading ? <LinearProgress /> : <p></p>}
        </div>
    )
}

export default Loader 