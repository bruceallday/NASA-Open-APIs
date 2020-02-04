import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: 70,
    width: '80vh',

  },
  pageTitle: {
    width: "80vw",
    fontSize: "8em",
    margin: 0,
    color: "#212121"
  },

  pageSubTitle: {
    width: "80vw",
    fontSize: "2em",
    color: "grey"
  }
}));