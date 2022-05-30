// import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core";
const theme = createTheme()

export const styleObj = {
  containerClass: {
    // border: "1px solid",
    display: "flex",
    height: "70vh",
    // marginLeft:2 ,
    marginTop:"20px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F9BC",
    // background: 'url("./images/cool-background.png")',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100vw 100vh",
    [theme.breakpoints.down("sm")]: {
        backgroundSize: "100vw 100vh",
        flexDirection: "column"
        // height:"100vh"
    }
    // opacity:"0.8"
  },
  locationClass: {
    display: "flex",
    border: "1px solid",
    width: "25vw",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
        width:"70%"
    }
  },
  emailClass: {
    display: "flex",
    width: "25vw",
    border: "1px solid",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
        width:"70%"
    }
  },
  callClass: {
    display: "flex",
    width: "25vw",
    border: "1px solid",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
        width:"70%"
    }
  },
};
