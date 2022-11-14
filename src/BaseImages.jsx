import React, { useEffect, useState } from "react";
import ImageConversion from "./ImageConversion";

export const BaseImages = (props) => {
  const { images } = props;
  const [first, setfirst] = useState(images);
  useEffect(() => {
    // setfirst(images);
  }, [images]);
  console.log("first", first);
  return (
    <div>
      BaseImages
      <div>
        {first?.map((val, i) => {
          return <img src={val?.list} alt="" />;
        })}
      </div>
    </div>
  );
};
export default BaseImages;
