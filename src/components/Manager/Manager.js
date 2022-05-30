import { Box, Typography } from "@mui/material";
import React from "react";
// import { createTheme } from "@mui/system";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Message = () => {
  const classes = useStyles();
  const imgStyle = {
    width: "300px",
    // border: "1px solid black",
    height: "300px",
    overflow: "hidden",
    // objectFit: 'contain'
  };
  const image = {
    width: "100%",
    height: "100%",
  };
  const containerStyle = {
    marginTop: "20vh",
    display: "flex",
    // alignItems:'center',
    justifyContent: "center",
    height: "50vh",
    // border: "1px solid black",
    marginBottom: "2vh",
  };
  const rightStyle = {
    width: "70vw",
    paddingLeft: 7,
    // border: "1px solid",
    paddingRight: 3,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box className={classes.containerr}>
          <Box className={classes.image} sx={imgStyle}>
            <img style={image} src="./images/manag.jpeg" />
          </Box>
          <Box className={classes.rightStyle}>
            <Typography
              sx={{
                fontSize: 40,
                fontWeight: "bold",
                [theme.breakpoints.between("xs", "sm")]: {
                  marginTop: 3,
                },
              }}
            >
             प्रबन्धक का सन्देश
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: 1,
              }}
            >
              प्रिय अभिभावकों और छात्रों,
            </Typography>
            <Typography
              sx={{
                marginTop: 1,
              }}
            >
              श्री आत्मानंद जैन इंटर कॉलेज, हस्तिनापुर,मेरठ आपको
              शैक्षिक वातावरण एवं व्यवस्था का आश्वासन देता है | परिवार के
              प्रत्येक सदस्य परस्पर स्नेह, सौहार्द और आदर का भाव रखते है | आप एक
              ऐसी संस्था से जुड़े रहे है, जिसके, समरसता एवं एकरूपता को स्थापित
              करने की अपनी परम्परा को सुव्यवस्थित रखने हुए इसे आप उत्तरोतर विकास
              के पथ पर अग्रसर करेगें | हमारा सतत एवं भागीरथ प्रयास है कि हम इस
              संस्था के अपने सुव्यवस्थित मूल्यों के अनुकूल आप को अपने लक्ष्य तक
              पहुंचा सके एवं संस्कारयुक्त व्यक्ति बना सके | आप का मनोबल एवं
              नैतिक स्तर पर्वत से भी ऊँचा, समुद्र से भी गहरा और आकाश से भी विशाल
              होगा चाहिए | जिससे कोई भी शक्ति आपकी प्रगति को अवरुद्ध न कर सके |
              मेरी शुभकामनाएँ आप के साथ है|
            </Typography>
            <Typography
              sx={{
                marginTop: 1,
                fontWeight: "bold",
              }}
            >
              डॉ. विशाल जैन ,
            </Typography>
            <Typography fontWeight="bold">प्रबन्धक</Typography>
          </Box>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Message;

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  containerr: {
    marginTop: "20vh",
    display: "flex",
    // alignItems:'center',
    justifyContent: "center",
    height: "50vh",
    // border: "1px solid black",
    marginBottom: "2vh",
    margin: "auto",
    width: "80vw",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "10vh",
      height: "100%",
    },
  },
  rightStyle: {
    width: "70vw",
    paddingLeft: 7,
    marginLeft: "20px",
    // border: "1px solid",
    paddingRight: 3,
  },
  image: {},
}));
