import { Box, TextField, Typography } from "@material-ui/core";
import React from "react";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";

const AdminPick = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.teachers}>
        <Typography>Teachers</Typography>
      </Box>
      <Box className={classes.gallery}>
        <Typography>Gallery</Typography>
      </Box>
      {/* <TextField></TextField> */}
    </Box>
  );
};

export default AdminPick;

const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
