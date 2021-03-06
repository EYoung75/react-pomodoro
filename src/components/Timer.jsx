import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"


const Timer = (props) => {
    return (
        <div className="timer">
            <Container>
                <Row className={"row"}>
                    <Col md={5} sm>
                        <Card className={"card"}><h1>Minutes</h1>{props.time}</Card>
                    </Col>
                    <Col md={2} sm className={"separate"}>
                        :
                    </Col>
                    <Col md={5} sm >
                        <Card className={"card"}><h1>Seconds</h1>{props.seconds}</Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Timer