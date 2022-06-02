import React from "react";

import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Message = () => {
  return (
    <>
      <Navbar />
      <div className="message-container">
        <div className="message-image">
          <img alt="" src="./images/princ.jpeg" />
        </div>
        <div className="message-rightStyle">
          <div className="message-heading-1">प्रधानाचार्य का सन्देश</div>
          <div className="message-heading-2">प्रिय अभिभावकों और छात्रों,</div>
          <div className="message-descr">
            श्री आत्मानंद जैन इंटर कॉलेज में अध्यापकों और कर्मचारियों की ओर से,
            हमारी वेबसाइट पर आप सभी का स्वागत करते हुए मुझे बहुत खुशी हो रही है।
            श्री आत्मानंद जैन इंटर कॉलेज ने जबरदस्त अनुभव अर्जित किया है और
            शिक्षकों, कर्मचारियों और छात्रों की मदद से सफलता का स्वाद साझा किया
            है, जिन्होंने हमें इस क्षेत्र के अन्य स्कूलों के बीच प्रतिष्ठा बनाने
            में मदद की है। 1964 में अपनी स्थापना के बाद से, स्कूल ने उत्कृष्ट
            शिक्षा, पारंपरिक मूल्यों और विरासतों के लिए आधार स्थापित किए हैं
            जिन्हें आने वाले वर्षों में याद किया जाएगा।
          </div>
          <div className="message-by">श्री अतुल कुमार बंसल ,</div>
          <div style={{ fontWeight: "bold" }}>प्रधानाचार्य</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Message;
