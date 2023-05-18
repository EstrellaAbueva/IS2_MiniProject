import React, { useState, useRef } from 'react';
import './FileText.css';
import SelectGraph from '../SelectGraph/SelectGraph';
import DisplayTable from '../DisplayTable/DisplayTable';
import TextInput from '../TextInput/TextInput';

const FileText = () => {
  const [fileData, setFileData] = useState([]);
  const fileInputRef = useRef(null);

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
          <TextInput label={"Remarks"} />
          <button className="pdf">Generate PDF</button>
        </div>
      </div>
    </>
  );
};

export default FileText;