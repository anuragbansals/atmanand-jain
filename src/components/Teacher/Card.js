import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [workerClass, setWorkerClass] = useState(null);
  useEffect(() => {
    if (window.location.pathname === "/other-members") {
      setWorkerClass("worker");
    } else {
      setWorkerClass("teacher");
    }
  }, []);

  return (
    <div className={`${workerClass}-container`}>
      <div className="teacher-image">
        <img
          alt=""
          // style={{ width: "auto", height: "100%", maxWidth: "100%" }}
          src={props.image}
          className="image"
        />
        <div className="middle">
          <div className="teacher-name">{props.name}</div>
          <div className="teacher-designation">{props.designation}</div>
          {window.location.pathname !== "/other-members" && (
            <>
              <div className="teacher-degree">{props.edu}</div>
              <div className="teacher-phone">Ph- {props.phone}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
