import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import { docs } from "./dummy";

function ImageGrid({ setSelectedImg }) {
  // const docs = useSelector((state) => state.photos.action);

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


export default (ImageGrid);
