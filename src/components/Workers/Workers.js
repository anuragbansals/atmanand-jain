import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getWorker } from "../../redux/actions/workerAction";
import Card from "../Teacher/Card";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Title from "../Teacher/Title";

const Worker = (props) => {
  const [workerClass, setWorkerClass] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorker());
  }, [dispatch]);
  useEffect(() => {
    if (window.location.pathname === "/other-members") {
      setWorkerClass("worker");
    } else {
      setWorkerClass("teacher");
    }
  }, []);
  if (props.workers && props.workers.length !== 0) {
    props.workers.sort((a, b) => a.id - b.id);
  }
  if (props.workers.length === 0) {
    return (
      <>
        <Navbar />
        <Title title="हमारे सहयोगी" />
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
      <Title title="हमारे सहयोगी" />
      <div className={`${workerClass}-grid`}>
        {props.workers.length !== 0 &&
          props.workers.map((worker) => (
            <div key={worker.id}>
              <Card
                name={worker.name}
                designation={worker.designation}
                image={worker.image}
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
    workers: state.workers,
  };
};

export default connect(mapStateToProps)(Worker);
