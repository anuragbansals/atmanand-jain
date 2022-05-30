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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box className={classes.containerr}>
          <Box className={classes.image} sx={imgStyle}>
            <img alt="" style={image} src="./images/princ.jpeg" />
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
              प्रधानाचार्य संदेश
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
              श्री आत्मानंद जैन इंटर कॉलेज में अध्यापकों और
              कर्मचारियों की ओर से, हमारी वेबसाइट पर आप सभी का स्वागत करते हुए
              मुझे बहुत खुशी हो रही है। श्री आत्मानंद जैन (अल्पसँख्यक्) इंटर
              कॉलेज ने जबरदस्त अनुभव अर्जित किया है और शिक्षकों, कर्मचारियों और
              छात्रों की मदद से सफलता का स्वाद साझा किया है, जिन्होंने हमें इस
              क्षेत्र के अन्य स्कूलों के बीच प्रतिष्ठा बनाने में मदद की है। 1964
              में अपनी स्थापना के बाद से, स्कूल ने उत्कृष्ट शिक्षा, पारंपरिक
              मूल्यों और विरासतों के लिए आधार स्थापित किए हैं जिन्हें आने वाले
              वर्षों में याद किया जाएगा।
            </Typography>
            <Typography
              sx={{
                marginTop: 1,
                fontWeight: "bold",
              }}
            >
              श्री अतुल कुमार बंसल,
            </Typography>
            <Typography fontWeight="bold">प्रधानाचार्य</Typography>
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
    margin:"auto",
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
