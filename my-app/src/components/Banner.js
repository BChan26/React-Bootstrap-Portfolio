import {Container, Row, Col} from "react-bootstrap"

import BChanScience from '../assets/img/BChanScience.jpg'
import DBoat from '../assets/img/DBoat.png'

export const Banner = () => {
return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                {/* Column breakpoints based on sizes */}
                <Col xs={12} md={6} xl={7}>
                    <h1>Brandon Chan</h1>
                    <h4>Software Engineer - Science Teacher - Sports Coach</h4>
                    {/* <h4>Science Teacher</h4>
                    <h4>Sports Coach</h4> */}

                    <p>As a software engineer who teaches middle school science, I firmly believe in lifelong learning and supporting my community. Whether it's coaching, coding, or parent-teacher conferences, I approach challenges with an empathetic lens: problem solve, reiterate, and adapt to support growth and effect change.</p>
                    <img src={DBoat}  id="DBoat" alt="Dragonboat"/>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={BChanScience} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
    </section>
)
}