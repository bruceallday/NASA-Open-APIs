import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import ROVER_DATA from  '../../data/roverdata/rovercameras.js' 

const SearchForm = (props) => {

    const [cam, handleCam] = useState("")
    const [sol, handleSol] = useState("")
    const [rover, handleRover] = useState("")
    const [menuItems, setMenuItems] = useState([
        "FHAZ",
        "RHAZ",
        "MAST",
        "CHEMCAM",
        "MAHLI",
        "MARDI",
        "NAVCAM"
    ])

    console.log(menuItems)

    const handleRoverChange = (event) =>{
        handleRover(event.target.value)

        if(event.target.value === "Curiosity"){
            setMenuItems(ROVER_DATA.rover.curiosity)
            console.log("Rovers cams " + menuItems)

        } else if (event.target.value === "Opportunity"){
            setMenuItems(ROVER_DATA.rover.opportunity)
            console.log("Rovers cams " + menuItems)

        }else{
            setMenuItems(ROVER_DATA.rover.spirit)
            console.log("Rovers cams " + menuItems)
        }
    }

    const handleCamChange = (event) => {
        handleCam(event.target.value)
        console.log(cam)
    }

    const handleSolChange = (event) => {
        handleSol(event.target.value)
        console.log(sol)
    }

    return(
        <div className="searchForm">

            <div>
                <InputLabel id="rover-label">Choose a Rover</InputLabel>
                <Select
                    labelId="rover-label"
                    id="rover-select"
                    value={rover}
                    onChange={handleRoverChange}
                >
                    <MenuItem value={'Curiosity'}>Curiosity</MenuItem>
                    <MenuItem value={'Opportunity'}>Opportunity</MenuItem>
                    <MenuItem value={'Spirit'}>Spirit</MenuItem>
                </Select>
            </div>

            
            <div>
                <InputLabel id="demo-simple-select-label">Choose a Camera</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cam}
                    onChange={handleCamChange}
                >
                    {menuItems.map(item => <MenuItem value={item}>{item}</MenuItem>)}

                </Select>
            </div>

            <TextField onChange={handleSolChange} id="standard-basic" placeholder="0000" label="Sol (0002 - 2540)" />

            <Button
                variant="contained"
                onClick={()=>{
                    props.getData(sol, cam, rover);
                }}
                >
                LAUNCH
            </Button>

        </div>
    )
}

export default SearchForm