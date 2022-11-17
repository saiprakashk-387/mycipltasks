import React, { useState } from "react";

const ImageConversion = () => {
  const [images] = useState([]);
  const [vals, setVals] = useState(); // state to update component

  const handleImage = (e) => {
    let files = e.target.files;
    Object.values(files).map((val, i) => {
      const reader = new FileReader();
      reader.readAsDataURL(val);
      reader.onload = () => {
        const imageslist = reader.result;
        images.push({ list: imageslist });
        setVals(val);
      };
    });
  };

  return (
    <div>
      ImageConversion
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => {
            handleImage(e);
          }}
        />
      </div>
      <div>
        {images?.map((val, i) => {
          return <img src={val?.list} alt="" />;
        })}
      </div>
    </div>
  );
};

export default ImageConversion;
