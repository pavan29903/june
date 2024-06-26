import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { clueType } from './store/atoms/clues';

const QrScannerComponent = () => {
  const [result, setResult] = useRecoilState(clueType);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleScan = data => {
    if (data) {
      const result = data.text;
      setResult(result);
      navigate("/next");
    }
  };

  const handleError = err => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setResult(inputValue);
      navigate("/next");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#070711]">
      <h1 className="text-[#FFFFFF] text-4xl font-bold mb-8">Scan Clue</h1>
      <h1 className="text-[#3F3F3F] text-2xl font-normal mb-8 text-center">
        You need to scan the QR to reveal the clue
      </h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        className="border [background:#16163D] rounded-[10px] border-[2px] border-white"
        facingMode="environment"
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="mt-4 p-2 border rounded"
        placeholder="Enter clue manually"
      />
    </div>
  );
};

export default QrScannerComponent;
