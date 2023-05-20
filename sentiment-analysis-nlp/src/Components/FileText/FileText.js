import React, { useState, useRef } from 'react';
import './FileText.css';
import SelectGraph from '../SelectGraph/SelectGraph';
import DisplayTable from '../DisplayTable/DisplayTable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FileText = () => {
  const [fileData, setFileData] = useState([]);
  const fileInputRef = useRef(null);
  const [remark, setRemark] = useState("");

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];

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
  }

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
            <button className="analyze">Analyze</button>
        </div>
      </div>
      <div className="container">
        <div className="graphs-area">
          <SelectGraph />
        </div>
        <div className="remarks-area">
        <ReactQuill value={remark} onChange={handleChange} style={{ width: "100%", height: "250px", backgroundColor: "orange" }} />
          <button className="pdf">Generate PDF</button>
        </div>
      </div>
      
    </>
  );
};

export default FileText;