import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../redux/actions/photosAction";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "./style.css";
import Title from "./Title";

const GalleryScreen = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  return (
    <>
    <Navbar/>
    <Title/>
      <div className="image-page">
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default GalleryScreen;
