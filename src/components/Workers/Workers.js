import React, { useEffect, useState } from "react";
// import { connect, useDispatch } from "react-redux";
// import { getWorker } from "../../redux/actions/workerAction";
import Card from "../Teacher/Card";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Title from "../Teacher/Title";
import { workersList } from "./dummy";

const Worker = (props) => {
  const [workerClass, setWorkerClass] = useState(null);
  const workers = workersList;
  useEffect(() => {
    if (window.location.pathname === "/other-members") {
      setWorkerClass("worker");
    } else {
      setWorkerClass("teacher");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Title title="हमारे सहयोगी" />
      <div className={`${workerClass}-grid`}>
        {workers.length !== 0 &&
          workers.map((worker) => (
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

export default Worker;
