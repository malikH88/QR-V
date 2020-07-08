import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";

import "./QRCodeReader.css";

import trott2 from '../../Image/TROTT_2.png'

class QRCodeReader extends Component {
  state = {
    result: "No result"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    console.log(this.state.result)
    return (
      <div className='Bg_QrCode_Reader'>
        <div>
          <Link to="/" className='Link_as_button cross_times'><FontAwesomeIcon icon={faTimesCircle} /></Link>
        </div>
        <div className='header_absolute'>
          <div className='Cnt_Logo'>
            <img src={trott2} alt="TROTT_2" className='logo_trott_2' />
            <h2 className='Title_Scan'>SCAN</h2>
          </div>
        </div>
        {/* <div className="InputReadQrCodeContent">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText id="InputCreatQrCode">Le contenu du QR Code :</InputGroupText>
            </InputGroupAddon>
            <Input
              id=""
              type="text"
              value={this.state.result}
            />
          </InputGroup>
        </div> */}
        <div>
          <QrReader 
            className='toto'
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className='btn_bottom'>
          <img src="" alt=""/>
        </div>
        {/* <div
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}>
          <div>
            <section className='bg_section'>
              <section className='ctn_section'>
                <div className='empty_div'>
                </div>
                <video className='video'>
                </video>
                <canvas className='canvas'>
                </canvas>
              </section>
            </section>
          </div>
        </div> */}
        {/* <div className="InputReadQrCodeContentMobile">
          <InputGroupText id="InputCreatQrCode">Le contenu du QR Code :</InputGroupText>
          <Input
            id=""
            type="text"
            value={this.state.result}
          />
        </div> */}
      </div>
    );
  }
}

export default QRCodeReader;
