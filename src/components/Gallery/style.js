import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core";
const theme = createTheme();

export const styleObj = {
  photo: {
    width: "30vw",
    height: "70vh",
    marginLeft: "34vw",
    marginTop: "2vh",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80vw",
      height: "40vh",
      marginLeft: "10vw",
    },
  },
  name: {
    // border: "1px solid black",
    marginTop: "20px",
  },
  text: {
    fontWeight: "bold",
  },
  shlokBox: {
    // border: "1px solid black",
    marginTop: "2vh",
    display: "flex",
    justifyContent: "center",
  },
  shlokText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  school: {
    // border: "1px solid black",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    // align
    padding: "10px",
    marginTop: "2vh"
  },
  schoolText: {
      fontWeight: "bold",
      fontSize: 30,
    //   textAlignLast: "center"
  }
};
