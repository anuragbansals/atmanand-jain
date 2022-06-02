import React from "react";
import Navbar from "../Navbar/Navbar";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { Footer } from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-containerClass">
        <div className="contact-locationClass">
          <div style={{ width: "80%" }}>
            <div style={{ fontWeight: "bold" }}>पता</div>
            <div style={{ marginTop: 1 }}> हस्तिनापुर,जिला मेरठ</div>
          </div>
          <div>
            <FmdGoodIcon />
          </div>
        </div>
        <div className="contact-emailClass">
          <div style={{ width: "80%" }}>
            <div style={{ fontWeight: "bold" }}>ईमेल</div>
            <div style={{ marginTop: 1 }}>
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
          <div>
            <EmailIcon />
          </div>
        </div>
        <div className="contact-callClass">
          <div style={{ width: "80%" }}>
            <div style={{ fontWeight: "bold" }}>फ़ोन</div>
            <div style={{ marginTop: 1 }}>(+91) 8077813113, 9027062497</div>
          </div>
          <div>
            <CallIcon />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
