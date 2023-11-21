import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const PdfViewer = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={onFileChange} />
      {file && (
        <div style={{ width: '100%', maxWidth: '800px', margin: 'auto', marginTop: '100px' }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={file} scrollMode="horizontal" />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
