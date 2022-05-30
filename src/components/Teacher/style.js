import { createTheme } from "@mui/material/styles";
const theme = createTheme();

export const styleObj = {
  container: {
    // border: "1px solid black",
    height: "40vh",
    width: "15vw",
    // padding:4,
    backgroundColor: "#FAF6F5",
    marginTop:"20px",
    borderRadius: "10px",
    overflow: "hidden",
    "&:hover":{
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      // border: "1px solid black",
      width: "70vw",
      // marginLeft: "0px"
      marginRight: "5vw"
    },
    // border: "1px solid black"
  },
  name: {
    // border: "1px solid black",
    marginLeft: "20px",
    alignContent: "center",
    width: "13vw",
    marginTop:6,
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    [theme.breakpoints.between("xs", "sm")]: {
      // border: "1px solid black",
      width: "80vw",
      // marginLeft: "10vw"
      marginLeft: "0px"
    },
  },
  designation: {
    // border: "1px solid black",
    marginLeft: "20px",
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    width: "13vw",
    [theme.breakpoints.between("xs", "sm")]: {
      // border: "1px solid black",
      width: "80vw",
      marginLeft: "0px"

    },
    // fontWeight: "bold"
  },
  degree: {
    // border: "1px solid black",
    marginLeft: "10px",
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    //   fontWeight: "bold"
  },
  grid: {
    // border: "1px solid",
    padding:"50px",
    marginTop:"20px",
    paddingBottom:"0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#F7F9BC",
    // background: 'url("./images/cool-background.png")',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100vw 120vh",
    // alignItems: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "15vw",
    height: "25vh",
    [theme.breakpoints.between("xs", "sm")]: {
      border: "1px solid black",
      width: "80vw",
    },
  },
};
