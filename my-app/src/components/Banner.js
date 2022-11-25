import {Container, Row, Col} from "react-bootstrap"
import BChanScience from '../assets/img/BChanScience.jpg'

export const Banner = () => {



return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>Brandon Chan</h1>
                    <h4>Software Engineer</h4>
                    <h4>Sports Coach</h4>
                    <h4>Science Teacher</h4>
                    <p>Using my skills to better our communities</p>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={BChanScience} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
    </section>
)
}