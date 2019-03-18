import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const Controller = (props) => {
    return (
        <Container className="controller">
            <Row>
                <Col md={4}>
                    <Button onClick={props.start}>
                        Start
                    </Button>
                </Col>
                <Col md={4}>
                    <Button onClick={props.stop}>
                        Reset
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Controller;