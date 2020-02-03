import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
         root: {},
         apodSection: {
           marginTop: 100,
           display: "flex",
           flexDirection: "column",
           alignItems: "center"
         },

         imageOfTheDay: {
           width: "90vw",
           height: "80%",
           
           "@media(max-width: 460px)": {
             height: "40%"
           },

           "@media(max-width: 768px)": {
             height: "55%"
           },

           "@media(max-width: 1024px)": {
             height: "70%"
           }
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
         },

         photoDate: {
           color: "grey"
         }
       }));