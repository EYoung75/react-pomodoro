import React from "react";
import { Modal, Button } from "react-bootstrap";

const SetTimer = (props) => {
  return (
    <div>
      <Modal show>
        <Modal.Header>
          <Modal.Title>Set Intervals:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Working Intervals in Minutes:</h4>
            <h5>(Traditional interval is 25 minutes)</h5>
            <input onChange={props.handleInput} name="time"/>
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
