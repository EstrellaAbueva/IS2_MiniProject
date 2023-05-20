import React, { useState, useRef, useEffect } from 'react';
import './FileText.css';
import SelectGraph from '../SelectGraph/SelectGraph';
import DisplayTable from '../DisplayTable/DisplayTable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BarGraph from '../SelectGraph/BarGraph';
import axios from 'axios';

const FileText = () => {
  const [fileData, setFileData] = useState([]);
  const fileInputRef = useRef(null);
  const [remark, setRemark] = useState("");
  const [clicked, setClicked] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
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
      setShowGraph(false);
      setResults({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }); // Reset results
  
      fileData.forEach(row => {
        const requestData = {
          col0: row[0],
          col2: 0,
        };
  
        axios
          .post('https://localhost:50952/predict', requestData)
          .then(response => {
            setResults(prevResults => {
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
          .catch(error => {
            console.error(error);
            count++;
          });
      });
    }
  }, [clicked, fileData]);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    setShowGraph(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      const rows = contents.split('\n').map(row => row.split(','));
      setFileData(rows);
    };

    reader.readAsText(file);
  };

  const handleChange = value => {
    setRemark(value);
    console.log(remark);
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
      <div className="container">
        <div className="graphs-area">
        {showGraph ? (
          <BarGraph data={results} />
        ) : (
          <span>Loading . . .</span>
        )}
        </div>
        <div className="remarks-area">
          <ReactQuill
            value={remark}
            onChange={handleChange}
            style={{ width: '100%', height: '250px', backgroundColor: 'orange' }}
          />
        </div>
        <button className="pdf">Generate PDF</button>
      </div>
    </>
  );
};

export default FileText;