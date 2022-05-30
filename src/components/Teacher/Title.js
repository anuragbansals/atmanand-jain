import { Box, Typography } from "@material-ui/core";
// import { Box } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <Box sx={{
        // border: "1px solid black",
        padding:"10px",
        height: "10vh",
        display: "flex",
        justifyContent: "center"
    }} >
      <div
        style={{
          fontWeight: "bold",
          fontSize: 40,
        }}
      >
        हमारे शिक्षक
      </div>
    </Box>
  );
};

export default Title;
