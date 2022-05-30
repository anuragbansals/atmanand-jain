import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";
import Navbar from "../Navbar/Navbar";

const Gallery = () => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      {/* <Navbarr/> */}
      <Box className={classes.school}>
        <Typography className={classes.schoolText}>
          {" "}
          श्री आत्मानंद जैन इंटर कॉलेज, हस्तिनापुर,मेरठ
        </Typography>
        {/* <Typography className={classes.schoolText} > हस्तिनापुर,मेरठ</Typography> */}
      </Box>
      <Box className={classes.shlokBox}>
        <Typography className={classes.shlokText}>श्री महावीराय नमः</Typography>
      </Box>
      <Box className={classes.photo}>
        {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="carousel-inner"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="carousel-item active"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="./images/man_1.jfif"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="./images/man_2.jfif"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="./images/man_3.jfif"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
        <img
          src="./images/maharaj.jpeg"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Box className={classes.name}>
          <Typography className={classes.text}>
            परम श्रधेय जैनाचार्य श्री श्री 1008 श्रीमद् विजय प्रकाशचंद सुरिश्वर्
            जी महाराज
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;

const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
