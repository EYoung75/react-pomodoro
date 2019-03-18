import React from "react";
import { Modal, Button } from "react-bootstrap";

const SetTimer = (props) => {
  return (
    <div className="setTimer">
      <Modal show>
        <Modal.Header>
          <Modal.Title>Enter an Interval Length (In Minutes)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input onChange={props.handleInput}>

            </input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closeModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SetTimer;
