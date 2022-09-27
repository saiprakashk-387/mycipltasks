import React, { useState } from 'react';
import "./DevHtml.css";
 import img2 from "./Imgfiles/wjr.png";
 import img4 from "./Imgfiles/wpf.png";
import img5 from "./Imgfiles/wgu.png";

const DevHtml = () => {
  const [file, setfile] = useState([{"img2":img2},{"img4":img4},{"img5":img5}])
    const [currentImage, setCurrentImage] = useState(1);

    const slidePrevious = () => {
      setCurrentImage((item) => {
        return item === 0 ? file.length - 1 : currentImage - 1;
      });
  }
  const slideNext = () => {
      setCurrentImage((item) => {
        return item + 1 === file.length ? 0 : currentImage + 1;
      });
  }
 
  return (
    <div className="mainDiv" style={{width:"100%"}}>
      <p className='firstptag'>
        <span className='spanwhell' >Wheels</span> <br/>
        Webpack, Rollup, Parcel, and other bundlers all work conceptually the <br/>
        same way: when you import a static file, like an image or a CSS file,
        
      </p>
      <div className="img-div">
      <button className='btnclcik' onClick={slidePrevious}>{"<"}</button>
        <div className="zoom">
          {" "}
          <img src={file[0].img2} alt="" />
          <p>
            <h6 className='headxt'>17-INCH CAST ALLUMINIUM WHEEL, FULLY <br/> PAINTED SILVER LITHO</h6>
            <h6 className='midtxt'>Standard on Touring FWD</h6>
            <h6  className="code">(WGU)</h6>
          </p>
        </div>
        <div className="zoom">
          <img src={file[2].img5} alt="" />
          <p>
            <h6 className='headxt'>17-INCH CAST ALLUMINIUM DIAMOND-CUT WHEEL <br/> WITH BALTIC GRAY POCKETS</h6>
            <h6 className='midtxt'>Standard on Touring FWD/Hybrid and <br/>Touring Hybrid</h6>
            <h6  className="code">(WJR)</h6>
          </p>
        </div>
        <div className="zoom">
          <img src={file[1].img4} alt="" />
          <p>
            <h6 className='headxt'>18 -INCH CAST ALLUMINIUM WHEEL WITH <br/> FORESHADOW FINISH</h6>
            <h6 className='midtxt'>Included with five appearences package on <br/>Touring hybrid , Touring L Hybrid and <br/> Limited Hybrid</h6>
            <h6  className="code">(WP6)</h6>
          </p>
        </div>
        {/* <div className="zoom">
          {" "}
            <img src={file[0].img2} alt="" />
          <p>
            <h6>Webpack, Rollup, Parcel, and other bundlers all work conceptually the same way</h6>
            <h6>Webpack, Rollup, Parcel</h6>
            <h6>WGU</h6>
          </p>
        </div>
        <div className="zoom">
         <img src={file[2].img5} alt="" />
          <p>
            <h6>Webpack, Rollup, Parcel, and other bundlers all work conceptually the same way</h6>
            <h6>Webpack, Rollup, Parcel</h6>
            <h6>WGU</h6>
          </p>
        </div>
        <div className="zoom">
            <img src={file[1].img4} alt="" />
          <p>
            <h6>Webpack, Rollup, Parcel, and other bundlers all work conceptually the same way</h6>
            <h6>Webpack, Rollup, Parcel</h6>
            <h6>WGU</h6>
          </p>
        </div> */}
                        <button className='btnclcik' onClick={slideNext}>{">"}</button>
      </div>
    </div>
  );
};

export default DevHtml;
