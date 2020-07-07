import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './Btn.css';

const BtnHome = () => {
  return (
    <div>
      <Link to="/" className='Link_as_button'><FontAwesomeIcon icon={faTimesCircle} /></Link>
    </div>
  );
};

export default BtnHome;