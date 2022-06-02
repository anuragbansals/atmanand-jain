import React from "react";

import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Message = () => {
  return (
    <>
      <Navbar />
      <div className="message-container">
        <div className="message-image">
          <img alt="" src="./images/manag.jpeg" />
        </div>
        <div className="message-rightStyle">
          <div className="message-heading-1">प्रबन्धक का सन्देश</div>
          <div className="message-heading-2">प्रिय अभिभावकों और छात्रों,</div>
          <div className="message-descr">
            श्री आत्मानंद जैन इंटर कॉलेज, हस्तिनापुर,मेरठ आपको शैक्षिक वातावरण
            एवं व्यवस्था का आश्वासन देता है | परिवार के प्रत्येक सदस्य परस्पर
            स्नेह, सौहार्द और आदर का भाव रखते है | आप एक ऐसी संस्था से जुड़े रहे
            है, जिसके, समरसता एवं एकरूपता को स्थापित करने की अपनी परम्परा को
            सुव्यवस्थित रखने हुए इसे आप उत्तरोतर विकास के पथ पर अग्रसर करेगें |
            हमारा सतत एवं भागीरथ प्रयास है कि हम इस संस्था के अपने सुव्यवस्थित
            मूल्यों के अनुकूल आप को अपने लक्ष्य तक पहुंचा सके एवं संस्कारयुक्त
            व्यक्ति बना सके | आप का मनोबल एवं नैतिक स्तर पर्वत से भी ऊँचा,
            समुद्र से भी गहरा और आकाश से भी विशाल होगा चाहिए | जिससे कोई भी
            शक्ति आपकी प्रगति को अवरुद्ध न कर सके | मेरी शुभकामनाएँ आप के साथ
            है|
          </div>
          <div className="message-by">डॉ. विशाल जैन ,</div>
          <div style={{ fontWeight: "bold" }}>प्रबन्धक</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Message;
