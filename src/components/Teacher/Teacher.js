import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getTeacher } from "../../redux/actions/getTeachersAction";
import Card from "./Card";
import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
import { styleObj } from "./style";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Title from "./Title";

const Teacher = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeacher());
  }, [dispatch]);
  const classes = useStyles();
  let sortedData = [];
  const sortDataBy = (data) => {
    sortedData = data.sort(function (a, b) {
      return a.id - b.id;
    });
  };
  if (props.teachers && props.teachers.length !== 0) {
    sortDataBy(props.teachers);
  }
  if (props.teachers.length === 0) {
    return (
      <>
        <Navbar />
        <Title/>
        <Box
          sx={{
            height: "60vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //   border: "1px solid black",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
            }}
            class="spinner-grow"
            role="status"
          >
            <span class="sr-only"></span>
          </div>
        </Box>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Title/>
      <Box className={classes.grid}>
        {sortedData.length !== 0 &&
          sortedData.map((teacher) => (
            <Card
              name={teacher.name}
              designation={teacher.designation}
              image={teacher.image}
              edu={teacher.education}
            />
          ))}
      </Box>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    teachers: state.teachers,
  };
};

export default connect(mapStateToProps)(Teacher);

const useStyles = makeStyles((theme) => styleObj);
