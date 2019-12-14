import React from "react";
import { Col } from 'react-bootstrap';

const Searchbar = () => {
  return (
    <Col md="6">
      <form className="form-inline mt-4 mb-4">
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </Col>
  );
}

export default Searchbar;