import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box, Button, Modal, Typography } from "@material-ui/core";
import "./admin.css";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { styleObj } from "./style";
import axios from "axios";
// import { connect, useDispatch } from "react-redux";
// import { editProfile } from "../../redux/actions/editProfileAction";
import AddTeacher from "./AddTeacher";
// import { deleteTeacher } from "../../redux/actions/deleteTeacherAction";
// import { getTeacher } from "../../redux/actions/getTeachersAction";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must have minimum 3 characters")
    .required("Required"),
  phoneno: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  picture: Yup.string().required("Required"),
  designation: Yup.string().required("Required"),
});

function AdminTeacher(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [uploaded, setUploaded] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  const [selectedTeacher, setSelectedTeacher] = React.useState({
    name: "",
    phoneno: "",
    picture: "",
    designation: "",
  });
  console.log(imageUrl);
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   setSelectedImage(selectedTeacher.picture);
  //   dispatch(getTeacher());
  // }, [dispatch, selectedTeacher.picture]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (id) => {
    // console.log("id", id);
    setSelectedTeacher(id.row);
    handleOpen();
  };
  // console.log(imageUrl);
  const handleDelete = (id) => {
    // dispatch(deleteTeacher(id.id));
  };
  const classes = useStyles();
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
        console.log(response);
        setImageUrl(response.data.url);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Full Name",
      width: 150,
      // editable: true,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 150,
      // editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      // type: "number",
      width: 110,
      // editable: true,
    },
    {
      field: "picture",
      headerName: "Picture",
      // description: "This column has a value getter and is not sortable.",
      // sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            {console.log(params)}
            <Avatar src={params.row.image} />
          </>
        );
      },
    },
    {
      field: "d",
      headerName: "Edit",
      renderCell: (id) => {
        return (
          <>
            <Button onClick={() => handleClick(id)} variant="contained">
              Edit
            </Button>
          </>
        );
      },
    },
    {
      field: "e",
      headerName: "Delete",
      renderCell: (id) => {
        return (
          <>
            <Button onClick={() => handleDelete(id)} variant="contained">
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.teachers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
          initialValues={selectedTeacher}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // dispatch(editProfile(values));
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box className={classes.formContainer}>
                <Box className={classes.close}>
                  <Button onClick={handleClose}>X</Button>
                </Box>
                <Avatar
                  className={classes.avatar}
                  src={selectedTeacher.picture}
                />
                <Typography className={classes.nameText}>Name</Typography>
                <Field className={classes.name} name="name" />
                {errors.name && touched.name ? (
                  <span>{errors.name}</span>
                ) : null}
                <Typography className={classes.phoneText}>
                  Phone Number
                </Typography>

                <Field className={classes.phoneno} name="phoneno" />
                {errors.phoneno && touched.phoneno ? (
                  <span>{errors.phoneno}</span>
                ) : null}
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
      <AddTeacher />
    </div>
  );
}

// const theme = createTheme();
const useStyles = makeStyles((theme) => styleObj);

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     teachers: state.teachers,
//   };
// };

export default (AdminTeacher);
