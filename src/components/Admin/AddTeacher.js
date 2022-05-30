import * as React from "react";

import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";
import { Avatar, Box, Button, Modal, Typography } from "@material-ui/core";
import { addTeacher } from "../../redux/actions/addTeacherAction";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must have minimum 3 characters")
    .required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  image: Yup.string(),
  designation: Yup.string().required("Required"),
  education: Yup.string().required("Required"),
  id: Yup.string()
});

export default function AddTeacher() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [uploaded, setUploaded] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "rs9oayhx");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/do6sejlyn/image/upload",
        formData,
        {
          onUploadProgress: (data) => {
            setUploaded(Math.round((data.loaded / data.total) * 100));
          },
        }
      )
      .then((response) => {
        setImageUrl(response.data.url);
      });
  };
  //   const classes = useStyles()

  return (
    <div>
      <Button onClick={handleOpen}>Add Teacher</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
          initialValues={{
            name: "",
            phone: "",
            image: "",
            designation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const data = { values, imageUrl };
            // dispatch(editProfile(values));
            dispatch(addTeacher(data));
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box className={classes.formAddContainer}>
                <Box className={classes.close}>
                  <Button onClick={handleClose}>X</Button>
                </Box>
                <Avatar className={classes.avatar} src={imageUrl} />
                <Typography className={classes.nameText}>Name</Typography>
                <Field className={classes.name} name="name" />
                {errors.name && touched.name ? (
                  <span>{errors.name}</span>
                ) : null}
                <Typography className={classes.phoneText}>
                  Phone Number
                </Typography>

                <Field className={classes.phoneno} name="phone" />
                {errors.phone && touched.phone ? (
                  <span>{errors.phone}</span>
                ) : null}
                <Typography className={classes.eduText}>Education</Typography>

                <Field className={classes.edu} name="education" />
                {errors.education && touched.education ? (
                  <span>{errors.education}</span>
                ) : null}
                 <Typography className={classes.eduText}>Id</Typography>

<Field className={classes.edu} name="id" />
{/* {errors.education && touched.education ? (
  <span>{errors.education}</span>
) : null} */}
                <Typography className={classes.designationText}>
                  Designation
                </Typography>

                <Field
                  as="select"
                  className={classes.designation}
                  name="designation"
                >
                  <option value="प्रबंधक">प्रबंधक</option>
                  <option value="प्रधानाचार्य">प्रधानाचार्य</option>
                  <option value="सहायक अध्यापक">सहायक अध्यापक</option>
                </Field>
                {errors.designation && touched.designation ? (
                  <span>{errors.designation}</span>
                ) : null}
                <input
                  onChange={(event) => setSelectedImage(event.target.files[0])}
                  className={classes.image}
                  type="file"
                />
                {uploaded && (
                  <div
                    style={{
                      width: "20vw",
                      marginLeft: "15vw",
                    }}
                    className="progress mt-2"
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={uploaded}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${uploaded}%` }}
                    >
                      {`${uploaded}%`}
                    </div>
                  </div>
                )}
                <Box
                  sx={{
                    marginLeft: "20vw",
                    marginTop: "2vh",
                  }}
                >
                  <Button
                    type="button"
                    onClick={handleUpload}
                    variant="contained"
                  >
                    Upload Image
                  </Button>
                </Box>
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
    </div>
  );
}
// const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);
