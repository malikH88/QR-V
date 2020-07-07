import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import "./QRCodeReader.css";

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
    return (
      <div>
        <div>
          <Link to="/" className='Link_as_button'><FontAwesomeIcon icon={faTimesCircle} /></Link>
        </div>
        <div className="InputReadQrCodeContent">
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
        </div>
        <div>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
        </div>
        <div className="InputReadQrCodeContentMobile">
          <InputGroupText id="InputCreatQrCode">Le contenu du QR Code :</InputGroupText>
          <Input
            id=""
            type="text"
            value={this.state.result}
          />
        </div>
      </div>
    );
  }
}

export default QRCodeReader;
