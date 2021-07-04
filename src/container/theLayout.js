import { Container, Row, Col } from 'react-bootstrap';
import {
    Content,
    SideLeft,
    SideRight
} from './index'
import "./container.css";

const TheLayout = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <SideLeft />
                </Col>
                <Col xs={5}>
                    <Content />
                </Col>
                <Col xs={4}>
                    <SideRight />
                </Col>
            </Row>
        </Container>
    );
}

export default TheLayout;
