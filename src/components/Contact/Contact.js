import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";
import { Footer } from "../Footer/Footer";

const Contact = () => {
  const classes = useStyles();
  
  return (
    <>
      <Navbar />
      <Box className={classes.containerClass}>
        <Box className={classes.locationClass}>
          <Box sx={{ width: "80%" }}>
            <Typography sx={{ fontWeight: "bold" }}>पता</Typography>
            <Typography sx={{ marginTop: 1 }}> हस्तिनापुर,जिला मेरठ</Typography>
          </Box>
          <Box>
            <FmdGoodIcon />
          </Box>
        </Box>
        <Box className={classes.emailClass}>
          <Box sx={{ width: "80%" }}>
            <Typography sx={{ fontWeight: "bold" }}>ईमेल</Typography>
            <Typography sx={{ marginTop: 1 }}>
              sajhastinapur@gmail.com
            </Typography>
          </Box>
          <Box>
            <EmailIcon />
          </Box>
        </Box>
        <Box className={classes.callClass}>
          <Box sx={{ width: "80%" }}>
            <Typography sx={{ fontWeight: "bold" }}>फ़ोन</Typography>
            <Typography sx={{ marginTop: 1 }}>
              (+91) 8077813113, 9027062497{" "}
            </Typography>
          </Box>
          <Box>
            <CallIcon />
          </Box>
        </Box>
      </Box>
      <Footer />
      {/* </Box> */}
    </>
  );
};

export default Contact;

// const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
