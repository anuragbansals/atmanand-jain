import { Button, Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../redux/actions/photosAction";

const AddPhotos = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [uploaded, setUploaded] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);
  const dispatch = useDispatch()
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "zhtzatxk");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dch73khsd/image/upload",
        formData,
        {
          onUploadProgress: (data) => {
            setUploaded(Math.round((data.loaded / data.total) * 100));
          },
        }
      )
      .then((response) => {
        console.log(response);
        setImageUrl(response.data);
      });
  };
  const handleSubmit = () => {
      dispatch(addPhoto(imageUrl))
  }
  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "30vw",
        height: "20vh",
        margin: "auto",
        marginTop: "30vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="file"
        onChange={(event) => setSelectedImage(event.target.files[0])}
      />
      {uploaded && (
        <div
          style={{
            width: "20vw",
            marginLeft: "15vw",
          }}
          className="progress mt-2"
        >
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={uploaded}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${uploaded}%` }}
          >
            {`${uploaded}%`}
          </div>
        </div>
      )}
      <Box sx={{ width: "10vw", marginTop: "20px" }}>
        <Button type="button" onClick={handleUpload} variant="contained">
          Upload
        </Button>
      </Box>
      <Box>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddPhotos;
