import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const Controller = (props) => {
    return (
        <Container className="controller">
            <Row>
                <Col md={4}>
                    <Button>
                        Play
                    </Button>
                </Col>
                <Col md={4}>
                    <Button>
                        Pause
                    </Button>
                </Col>
                <Col md={4}>
                    <Button>
                        Reset
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Controller;