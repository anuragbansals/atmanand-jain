// import { div, div } from "@material-ui/core";
import React from "react";
// import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
// import { styleObj } from "./style";
import Navbar from "../Navbar/Navbar";

const Gallery = () => {
  // const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className="school">
        <div className="schoolText">
          {" "}
          श्री आत्मानंद जैन इंटर कॉलेज, हस्तिनापुर,मेरठ
        </div>
      </div>
      <div className="shlokBox">
        <div className="shlokText">श्री महावीराय नमः</div>
      </div>
      <div className="photo">
        <img
          alt=""
          src="./images/maharaj.jpeg"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <div className="pic-name">
          <div className="pic-text">
            परम श्रधेय जैनाचार्य श्री श्री 1008 श्रीमद् विजय प्रकाशचंद सुरिश्वर्
            जी महाराज
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// const theme = createTheme();
// const useStyles = makeStyles((theme) => styleObj);
