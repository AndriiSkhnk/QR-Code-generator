import React, { useState } from 'react'
import './App.css'
import QRCode from "qrcode";

const App = () => {

  const [qrcode, setQrcode] = useState('');
  const [url, setUrl] = useState('');

  const generateQR = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err)

      setQrcode(url)
    })
  }

  return (
    <div className="wrap">
      <div className="container">
        <h1>Generate QR Code</h1>
        <div className="qr-code">
           {qrcode && <img src={qrcode} />}
        </div>
        <input type='text' value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Write a link or text' />
        <button className='generate' onClick={generateQR}>Generate</button>
        {qrcode && <>
        <div className="download-btn">
          <a href={qrcode} download='QR-code.png'>Download</a>
        </div>
        </>}
      </div>
    </div>
  )
}

export default App