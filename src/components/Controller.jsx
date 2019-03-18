import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const Controller = (props) => {
    return (
        <Container className="controller">
            <Row>
                <Col>
                    <Button onClick={props.start} className={"button"}>
                        Start
                    </Button>
                </Col>
                <Col>
                    <Button onClick={props.stop} className={"button"}>
                        Reset
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Controller;