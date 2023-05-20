import React, { useState, useRef, useEffect } from 'react';
import './FileText.css';
import DisplayTable from '../DisplayTable/DisplayTable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BarGraph from '../Graphs/BarGraph';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import Modal from 'react-modal';

const FileText = () => {
  const [fileData, setFileData] = useState([]);
  const fileInputRef = useRef(null);
  const [remark, setRemark] = useState('');
  const componentRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const generatePDF = false;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [results, setResults] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  useEffect(() => {
    let count = 0;

    if (clicked) {
      setClicked(false);
      setResults({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }); // Reset results

      fileData.forEach((row) => {
        const requestData = {
          col0: row[0],
          col2: 0,
        };

        axios
          .post('https://localhost:50952/predict', requestData)
          .then((response) => {
            setResults((prevResults) => {
              const updatedResults = { ...prevResults };
              updatedResults[response.data.predictedLabel] += 1;
              return updatedResults;
            });

            count++;
            if (count === fileData.length) {
              console.log(results);
              setShowGraph(true);
            }
          })
          .catch((error) => {
            console.error(error);
            count++;
          });
      });
    }
  }, [clicked]);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    setShowGraph(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      const rows = contents.split('\n').map((row) => row.split(','));
      setFileData(rows);
    };

    reader.readAsText(file);
  };

  const handleChange = (value) => {
    setRemark(value);
    console.log(remark);
  };

  const printHandle = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: () => `
      @page { size: letter; margin: 0.5in;}
      @media print {
        .print-break {
          margin-top: 1rem;
          display: block;
          page-break-before: always;
        }
      }
    `,
  });

  const handlePrint = () => {
    if (showGraph) {
      printHandle();
    } else {
      console.log('Component is not rendered yet or no graph data!');
    }
  };

  const GeneratePDF = () => {
    const barGraphRef = useRef();
  
    useEffect(() => {
      if (barGraphRef.current) {
        setTimeout(() => {
          barGraphRef.current.updateDimensions();
        }, 500);
      }
    }, []);

  
    return (
      <div ref={componentRef}>
            <div style={{width: "40%"}}>
              {showGraph ? (
                <BarGraph data={results} width={500} height={300} ref={barGraphRef} />
              ) : (
                <span>Loading . . .</span>
              )}
              <div className="remarks">
                <span>
                  <div dangerouslySetInnerHTML={{ __html: remark }}></div>
                </span>
              </div>
      </div>
      </div>
    );
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="whole-container">
        <div className="table-parent">
          {fileData.length > 0 ? (
            <DisplayTable data={fileData} />
          ) : (
            <div className="no-data">No data to display</div>
          )}
        </div>
        <div className="buttons-area">
          <label htmlFor="fileInput" className="import">
            Import
          </label>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".csv, .txt"
          />
          <button className="analyze" onClick={() => setClicked(true)}>
            Analyze
          </button>
        </div>
      </div>
      {showGraph && (
        <>
          <div className="container">
            <div className="graphs-area">
              <div className="remarks-title">Visualization</div>
                <div className='graph'>
                  <BarGraph data={results} />
                </div>
            </div>
            <div className="right">
              <div className="remarks-area">
                <div className="remarks-title">Remarks</div>
                  <ReactQuill
                  value={remark}
                  onChange={handleChange}
                  style={{width: '450px',height: '145px', backgroundColor: 'red' }}
                  />
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="pdf">Generate PDF</button>
          </div>
        </>
      )}
    </>
  );
};

export default FileText;