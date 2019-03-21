import React from "react"
import { Modal, Button } from "react-bootstrap"

const BreakTimer = (props) => {
  return (
    <div className="setTimer">
      <Modal show>
        <Modal.Header>
          <Modal.Title>Break Time!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>How long of a break do you think you deserve?</h4>
            <h5>(Traditional break is 5 minutes)</h5>
            <input onChange={props.handleInput} name="time"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closeModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BreakTimer