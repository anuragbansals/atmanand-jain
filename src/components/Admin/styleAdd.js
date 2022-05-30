import { createTheme } from "@mui/material/styles";
const theme = createTheme();

export const styleObj = {
  container: {
    backgroundColor: "blue",
    height: "80vh",
    width: "20vw",
  },
  teachers: {
    border: "1px solid red",
    // marginTop: "5vh",
    height: "5vh",
    padding: 4,
    color: "white",
    marginLeft: "5vw",
    // border: "1px solid yellow",
    width: "10vw",
    "&:hover": {
      cursor: "pointer",
    },
  },
  gallery: {
    // border: "1px solid red",
    height: "5vh",
    padding: 4,
    color: "white",
    marginLeft: "5vw",
    // border: "1px solid yellow",
    width: "10vw",
    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      color: "yellow",
    },
    "&:focus": {
      color: "yellow",
    },
  },
  formContainer: {
    width: "50vw",
    height: "85vh",
    border: "1px solid black",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "10vh",
    // marginBottom:"20px"
  },
  name: {
      // backgroundColor: "red",
    width: "20vw",
    //   margin: "auto",
    marginLeft: "15vw",
    padding: 6,
    marginTop: 4,
    color: "gray",
  },
  nameText: {
    border: "1px solid black",
    width: "25vw",
    // margin: "auto"
    marginLeft: "15vw",
    fontWeight: "bold",
    marginTop: "3vh",
  },
  phoneno: {
    width: "20vw",
    // margin: "auto",
    padding: 6,
    marginLeft: "15vw",
    color: "gray",
    marginTop: 4,

    // border: "gray",
  },
  phoneText: {
    // border: "1px solid black",
    width: "20vw",
    // margin: "auto"
    marginLeft: "15vw",
    fontWeight: "bold",
    marginTop: "3vh",
  },
  designation: {
    width: "20vw",
    // margin: "auto",
    padding: 6,
    marginLeft: "15vw",
    marginTop: 4,
    color: "gray",
  },
  designationText: {
    // border: "1px solid black",
    width: "20vw",
    // margin: "auto"
    marginLeft: "15vw",
    fontWeight: "bold",
    marginTop: "3vh",
  },
  avatar: {
    width: 150,
    height: 150,
    marginLeft: "20vw",
    marginTop: "5vh",
  },
  image: {
      marginLeft: "20vw",
      marginTop: "1vh"
  },
  close: {
    // border: "1px solid black",
    width: "50px",
    marginLeft: "93%"
  }
};
