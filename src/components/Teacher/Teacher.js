import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getTeacher } from "../../redux/actions/getTeachersAction";
import Card from "./Card";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Title from "./Title";

const Teacher = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeacher());
  }, [dispatch]);
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
        <Title title=" हमारे शिक्षक" />
        <div
          style={{
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
            className="spinner-grow"
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Title title=" हमारे शिक्षक" />
      <div className="teacher-grid">
        {sortedData.length !== 0 &&
          sortedData.map((teacher) => (
            <div key={teacher.id}>
              <Card
                name={teacher.name}
                designation={teacher.designation}
                image={teacher.image}
                edu={teacher.education}
                phone={teacher.phone}
              />
            </div>
          ))}
      </div>
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
