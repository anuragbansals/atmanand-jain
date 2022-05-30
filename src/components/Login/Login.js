import { Box, Button, Modal, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/loginAction";
// import { Modal, Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
  username: Yup.string().required(" Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // <Box className={classes.container}>
    <>
      <Box
        // sx={{
        //   marginTop: "25px",
        //   // fontSize:20
        // }}
      >
        <Button
          sx={
            {
              // fontSize:25
            }
          }
          onClick={handleOpen}
        >
          लॉग इन
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // dispatch(editProfile(values));
            dispatch(loginUser(values));
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box className={classes.formContainer}>
                <Box className={classes.close}>
                  <Button onClick={handleClose}>X</Button>
                </Box>
                <Typography className={classes.nameText}>Username</Typography>
                <Field className={classes.name} name="username" />
                {errors.username && touched.username ? (
                  <span>{errors.username}</span>
                ) : null}
                <Typography className={classes.phoneText}>Password</Typography>

                <Field className={classes.phoneno} name="password" />
                {errors.password && touched.password ? (
                  <span>{errors.password}</span>
                ) : null}

                <Box
                  sx={{
                    marginLeft: "22vw",
                    marginTop: "2vh",
                  }}
                >
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
    // </Box>
  );
};

export default Login;
const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
