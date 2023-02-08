import React from 'react';
import JsPDF from 'jspdf';
// import { Button } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';
import * as htmlToImage from 'html-to-image';

const Print = ({ fileName, elementId }) => {
  // Steps
  //  1. Need to create parent element with Id for chart
  //  2. Above parent element need to call this component
  //  3. Props below
  //     fileName and
  //     elementId which is created in parent element Id
  const htmlToImageData = () => {
    const imageData = new Promise((resolve, reject) => {
      const node = document.getElementById(elementId);
      htmlToImage
        .toPng(node, { quality: 1 })
        .then((dataUrl) => {
          resolve(dataUrl);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return imageData;
  };

  const handlePdfDownload = async () => {
    const imageData = await htmlToImageData();
    const pdf = new JsPDF('p', 'mm', 'a4');
    const img = new Image();
    img.src = imageData;
    pdf.addImage(img, 'png', 15, 10, 150, 100);
    pdf.save(fileName);
  };
  return <button onClick={handlePdfDownload} type="primary">Download</button>;
};

export default Print;
