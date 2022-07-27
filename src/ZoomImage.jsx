import React from "react";
import "./App.css";
import ReactImageZoom from "react-image-zoom";

const ZoomImage = () => {
  const imagePath =
    "https://media.cntraveler.com/photos/59bb6a56e35d8f08044a32cf/master/w_2048,h_1536,c_limit/Rakotzbrucke-GettyImages-538162756.jpg";
  let props3 = { width: 250, height: 250, zoomWidth: 500, img: imagePath };
  return (
    ///with package - zoom ovreall image ///
    <div className="girl">
      <ReactImageZoom {...props3} />
    </div>
    ////with css -little bit zoom on hover
    //  <div className="img-wrapper" style={{ width: "50%" }}>
    //   <img
    //     src={imagePath}
    //     alt=""
    //     className="hover-zoom"
    // />
    //   </div>
  );
};

export default ZoomImage;
