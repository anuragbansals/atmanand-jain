import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [workerClass, setWorkerClass] = useState(null);
  useEffect(()=>{
    if (window.location.pathname === "/other-members") {
      setWorkerClass("worker");
    } else {
      setWorkerClass("teacher");
    }
  },[])
  
  return (
    <div className={`${workerClass}-container`}>
      <div className="teacher-image">
        <img
          alt=""
          style={{ width: "100%", height: "100%" }}
          src={props.image}
        />
      </div>
      <div className="teacher-name">{props.name}</div>
      <div className="teacher-designation">{props.designation}</div>

      {window.location.pathname !== "/other-members" && (
        <>
          <div className="teacher-degree">{props.edu}</div>
          <div className="teacher-phone">Ph- {props.phone}</div>
        </>
      )}
    </div>
  );
};

export default Card;
