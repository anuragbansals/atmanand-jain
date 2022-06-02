import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: 'url("./images/cool-background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
      }}
      className="footer-container"
    >
      <div className="footer-detailClass">
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          श्री आत्मानंद जैन इंटर कॉलेज
        </div>
        <div className="footer-name">हस्तिनापुर, जिला मेरठ</div>
        <div className="footer-textClass">
          इंटरमीडिएट स्कूल द्वारा स्थापित और अनुदानित एक मान्यता प्राप्त संस्थान
          है स्कूल उत्तर प्रदेश माध्यमिक शिक्षा परिषद, प्रयागराज से संबद्ध है।
        </div>
      </div>
      <div className="linksClass">
        <div style={{ fontWeight: "bold" }} className="impLinkClass">
          महत्वपूर्ण लिंक्स
        </div>
        <div className="optionsClass" onClick={() => navigate("/about")}>
          विद्यालय के बार में
        </div>
        <div className="optionsClass" onClick={() => navigate("/faculties")}>
          हमारे अध्यापक
        </div>
        <div className="optionsClass" onClick={() => navigate("/gallery")}>
          गैलरी
        </div>
        {/* <div className={classes.optionsClass} onClick={()=>navigate('/manager')}  >प्रबन्धक संदेश</div>
          <div className={classes.optionsClass} onClick={()=>navigate('/message')}  >प्रधानाचार्य संदेश</div> */}
      </div>
      <div className="contactClass">
        <div className="contact">जानकारी</div>
        <div className="locationClass">
          <FmdGoodIcon />
          <div style={{ marginLeft: 10 }}>हस्तिनापुर, जिला मेरठ</div>
        </div>
        <div className="callClass">
          <CallIcon />
          <div style={{ marginLeft: 10 }}>(+91)8077813113, 9027062497</div>
        </div>
        <div className="emailClass">
          <EmailIcon />
          <div style={{ marginLeft: 10 }}>
            <a
              href="mailto: sajhastinapur@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#212529",
              }}
            >
              sajhastinapur@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
