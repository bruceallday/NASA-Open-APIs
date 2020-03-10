import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 60,
    paddingLeft: 20,

    //DESKTOP
    // paddingTop: 70,
    // paddingLeft: 70,
    // width: '80vh',

  },
  pageTitle: {

    //MOBILE
    fontSize: "4em",
    color: "#212121"

    //DESKTOP
    // width: "80vw",
    // fontSize: "8em",
    // color: "#212121"
  },

  pageSubTitle: {
    color: "grey"
  }
}));