import React from "react";
import { motion } from "framer-motion";
import { connect, useSelector } from "react-redux";
import "./style.css";

function ImageGrid({ setSelectedImg }) {
  const docs = useSelector((state) => state.photos.action);
  if (typeof docs === "undefined") {
    return (
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
        <div style={{
            width: "100px",
            height: "100px"
        }} class="spinner-grow" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.link)}
            >
              <motion.img
                src={doc.link}
                alt="uploadded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    docs: state.photos,
  };
};

export default connect(mapStateToProps)(ImageGrid);
