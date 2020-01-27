import React, { useState } from "react";

import 'date-fns'
import DateFnsUtils from "@date-io/date-fns";

import Button from "@material-ui/core/Button"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import "./searchform.styles.scss";

import ROVER_DATA from  '../../data/roverdata/rovercameras.js' 

const SearchForm = (props) => {

    const [cam, handleCam] = useState("")
    const [sol, handleSol] = useState("")
    const [date, handleDate] = useState(ROVER_DATA.rover.landing_dates[0][1])
    const [rover, handleRover] = useState("")
    const [menuItems, setMenuItems] = useState(ROVER_DATA.rover.curiosity);

    const handleRoverChange = (event) =>{
        handleRover(event.target.value)

        if (event.target.value === "Curiosity") {
          setMenuItems(ROVER_DATA.rover.curiosity);
          handleDate(ROVER_DATA.rover.landing_dates[0][1])

        } else if (event.target.value === "Opportunity") {
          setMenuItems(ROVER_DATA.rover.opportunity_spirit);
          handleDate(ROVER_DATA.rover.landing_dates[1][1])

        } else {
          setMenuItems(ROVER_DATA.rover.opportunity_spirit);
          handleDate(ROVER_DATA.rover.landing_dates[2][1])
        }
    }

    const handleCamChange = (event) => {
        handleCam(event.target.value)
    }

    const handleDateChange = (event) => {
      console.log("here is the terget.value" + event)
      let finaldate = `${event.getFullYear()}-${(event.getMonth() + 1)}-${event.getDate()}` 
        console.log("FINAL DATE: " +  finaldate)
        handleDate(finaldate)
    }

    const handleSolChange = (event) => {
        handleSol(event.target.value);
    }

    return (
      <div className="searchForm">
        <div>
          <InputLabel required id="rover-label">
            Choose a Rover
          </InputLabel>
          <Select
            labelId="rover-label"
            id="rover-select"
            value={rover}
            onChange={handleRoverChange}
          >
            <MenuItem value={"Curiosity"}>Curiosity</MenuItem>
            <MenuItem value={"Opportunity"}>Opportunity</MenuItem>
            <MenuItem value={"Spirit"}>Spirit</MenuItem>
          </Select>
        </div>

        <div>
          <InputLabel id="camera-label">Choose a Camera</InputLabel>
          <Select
            required
            labelId="camera-label"
            id="camera-select"
            value={cam}
            onChange={handleCamChange}
          >
            {menuItems.map((item, id) => (
              <MenuItem key={id} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/*SOL DATE SELECTOR*/}
        {/*<TextField
                required
                onChange={handleSolChange}
                id="standard-basic"
                placeholder="0000"
        label="Sol (0000 - 2540)"/>*/}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/dd"
            id="date-picker-inline"
            label="Choose a date"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>

        <Button
         style={{color: "#212121"}}
          variant="contained"
          onClick={() => {
            props.getData(date, cam[0], rover);
          }}
        >
          LAUNCH
        </Button>
      </div>
    );
}

export default SearchForm