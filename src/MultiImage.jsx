import React from 'react'
import { saveAs } from 'file-saver'
import image from './Imgfiles/image1.jpg'

const MultiImage = () => {
    const downloadImage = () => {
        saveAs(`${image}`, `${image}`) // Put your image url here.
    }
    return (
        <div>MultiImage - not woking
            <button onClick={downloadImage}>Download!</button>
        </div>
    )
}

export default MultiImage
