import React from "react";
import { Link } from "react-router-dom";
import './Btn.css';

import ScanLogo from "../../Image/Logos_trott_1_.png"

const BtnQRRead = () => {
  return (
    <div className='Bg_Scanlogo'>
      <div className='ScanLogo'>
        <Link to="/QRCodeReader" >
          <img src={ScanLogo} alt="scan" />
          <p className='Text_Scan'>Scan</p>
        </Link>
      </div>
    </div>

  );
};

export default BtnQRRead;