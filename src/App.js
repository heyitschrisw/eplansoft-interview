import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Canvas from './Canvas'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log('success')
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="/sample/sample.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
          <Page pageNumber={pageNumber} scale={2.0} />
      </Document>
      <Canvas />
      <p style={{display: 'flex', justifyContent: 'center'}}>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default App;
