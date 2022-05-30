import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";

const Card = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.image} >
        <img alt="" style={{width:"100%", height: "100%"}} src={props.image} />
      </Box>
      <Typography className={classes.name}>{props.name}</Typography>
      <Typography className={classes.designation}>
        {props.designation}
      </Typography>
      <Typography className={classes.degree}>{props.edu}</Typography>
    </Box>
  );
};

export default Card;

// const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
