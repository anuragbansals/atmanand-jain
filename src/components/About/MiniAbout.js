import React from "react";
import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import { createTheme } from "@material-ui/core";
// import { styleObj } from "./style";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../redux/actions/photosAction";
import { getTeacher } from "../../redux/actions/getTeachersAction";

const MiniAbout = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPhotos());
    dispatch(getTeacher());
  }, [dispatch]);
  // const clgStyle = {
  //   //   marginTop:4
  // };
  // const detStyle = {
  //   marginTop: 2,
  // };
  // const descrStyle = {
  //   marginTop: 2,
  // };
  // const moreDetStyle = {
  //   marginTop: 2,
  // };
  return (
    <>
      <div className="containerClass">
        <div
          style={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          परिचय -
        </div>
        <div className="clgClass">
          श्री आत्मानंद जैन इंटर कॉलेज, हस्तिनापुर, मेरठ
        </div>
        <div className="detStyle">
          इंटरमीडिएट स्कूल द्वारा स्थापित और अनुदानित एक मान्यता प्राप्त संस्थान
          है
        </div>
        <div className="descrStyle">
          स्कूल उत्तर प्रदेश माध्यमिक शिक्षा परिषद, प्रयागराज से संबद्ध है।
        </div>
        <div className="moreDetStyle">
          श्री 1008 आचार्य श्री पूर्णानंद सुरिश्वर् जी महाराज के शिष्य रत्न महान
          तपस्वी, अनेक तीर्थधारक्, समाज सुधारक, शिक्षा प्रचारक एवं श्री जैन
          शवेतांबर महासभा उत्तर प्रदेश के संस्थापक परम श्रधेय जैनाचार्य श्री
          श्री 1008 श्रीमद् विजय प्रकाशचंद सुरिश्वर् जी महाराज ने सन् 1964 में
          इस विद्यालय की अपने कर कमलों द्वारा नींव रखी एवं आपने इस विद्यालय का
          नाम अपने श्रधेय श्री आत्माराम महाराज सा० के नाम पर श्री आत्मानंद जैन
          हायर सेकेंडरी स्कूल रखा l महाराज साहब का उद्देश्य ग्रामीण छात्रों को
          उचित शिक्षा, दिलाना था l क्योंकि उस समय विद्यालयों का अभाव था।...{" "}
          <Link to="about">अधिक पढ़ें</Link>
        </div>
      </div>
    </>
  );
};

export default MiniAbout;

// const theme = createTheme();
// const useStyles = makeStyles((theme) => styleObj);
