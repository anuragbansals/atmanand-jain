import { Box, Typography } from "@material-ui/core";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";
import { useNavigate } from "react-router-dom";


export const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const clgDetStyle = {
    // marginTop: 4,
    // border: "1px solid"
  }
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.containerClass}>
        <Box className={classes.detailClass}>
          <Box sx={{fontWeight:"bold"}} >श्री आत्मानंद जैन इंटर कॉलेज</Box>
          <Typography className={classes.nameClass} >हस्तिनापुर, जिला मेरठ</Typography>
          <Typography  className={classes.textClass} sx={clgDetStyle}>
            इंटरमीडिएट स्कूल द्वारा स्थापित और अनुदानित एक मान्यता प्राप्त
            संस्थान है स्कूल उत्तर प्रदेश माध्यमिक शिक्षा परिषद, प्रयागराज से
            संबद्ध है।
          </Typography>
        </Box>
        <Box className={classes.linksClass}>
          <Typography sx={{fontWeight: "bold"}} className={classes.impLinkClass} >महत्वपूर्ण लिंक्स</Typography>
          <Typography className={classes.optionsClass} onClick={()=>navigate('/gallery')}  >गैलरी</Typography>
          <Typography className={classes.optionsClass} onClick={()=>navigate('/about')}  >विद्यालय के बार में</Typography>
          <Typography className={classes.optionsClass} onClick={()=>navigate('/faculties')}  >हमारे अध्यापक</Typography>
          {/* <Typography className={classes.optionsClass} onClick={()=>navigate('/manager')}  >प्रबन्धक संदेश</Typography>
          <Typography className={classes.optionsClass} onClick={()=>navigate('/message')}  >प्रधानाचार्य संदेश</Typography> */}
        </Box>
        <Box className={classes.contactClass} >
          <Typography className={classes.contact} >जानकारी</Typography>
          <Box className={classes.locationClass} >
            <FmdGoodIcon />
            <Typography style={{marginLeft:10}} >हस्तिनापुर, जिला मेरठ</Typography>
          </Box>
          <Box className={classes.callClass} >
            <CallIcon />
            <Typography style={{marginLeft:10}} >(+91)8077813113, 9027062497</Typography>
          </Box>
          <Box className={classes.emailClass} >
            <EmailIcon />
            <Typography style={{marginLeft:10}} >sajhastinapur@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
