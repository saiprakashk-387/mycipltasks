import React, { useState } from 'react';
import image from './Imgfiles/image1.jpg'
 
const Images = () => {
    const [file, setfile] = useState([])
    const [currentImage, setCurrentImage] = useState(0);

    const handleImage = (e) => {
        setfile(e.target.files) 
    }
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
    const deleteImage = (indexval) => {
        let allUsers = [...file];
        setfile(allUsers.filter((user, index) => index !== indexval));
    }

    return (
        <> <h4>Image Slider</h4>
            <div className='imagecontent' style={{ alignItems: "center" }} >
                {file.length >= 1 ?
                    <div className="slidediv">
                        <button onClick={slidePrevious}>{"<"}</button>
                        <img src={URL.createObjectURL(file[currentImage])} style={{ height: "250px", width: "500px" }} />
                        <button onClick={slideNext}>{">"}</button>
                    </div>
                    : <div className='imagediv'>
                        <img alt="Img1" src={image} />
                    </div>
                }
            </div>
            <button type='button'> <input type="file" name="image" multiple onChange={handleImage} /></button>
            {
                file.length >= 1 ?
                    <div>
                        <p>Selected Images </p>
                        {Object.entries(file).map((val, i) => {
                            return (
                                <p>
                                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(val[1])} />
                                    <button
                                        type="button"
                                        onClick={() => deleteImage(i)}
                                        width="100"
                                    >Delete</button>
                                </p>
                            )
                        })}
                    </div>
                    : "Select File"}
        </>
    )
}
export default Images;
