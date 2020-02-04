import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
         root: {},
         apodSection: {
           display: "flex",
           flexDirection: "column",
           alignItems: "center"
         },

         contentSection: {
            padding: '0px 70px 70px 70px'
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

         photoDate: {
           color: "grey"
         }
       }));