import React from 'react'
import GridListTileBar from "@material-ui/core/GridListTileBar";
import './roverimage.styles.scss'

const RoverImages = (props) =>{

    return (
      <div>
        <img className="roverImg" src={props.imageUrl} alt="Mars landscape" />
        <GridListTileBar title={`Sol: ${props.solDate}`} />
        
        {/*EARTH DAY*/}
        {/*<GridListTileBar title={`Earth Day: ${props.earthDate}`} />*/}

      </div>
    );
}

export default RoverImages