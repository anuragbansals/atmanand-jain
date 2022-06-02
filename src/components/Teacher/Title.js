import React from "react";

const Title = (props) => {
  return (
    <div
      style={{
        // border: "1px solid black",
        padding: "10px",
        height: "5vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: 40,
        }}
      >
        {props.title}
      </div>
    </div>
  );
};

export default Title;
