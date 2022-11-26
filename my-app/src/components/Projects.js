import Forecast from '../assets/img/Forecast.png'
import Boston1 from '../assets/img/Boston1.png'
import The65Bus from '../assets/img/The65Bus.png'
import {ProjectCard} from './ProjectCard'


import {Container, Row, Col, Tab} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';


export const Projects = () => {

const project1 =[
    {
        // title: "Weather Forecast",
        // description: "HTML, CSS, Javascript, APIs",
        imgURL: Forecast,
        URL: 'https://65bus.netlify.app'
    }]

const project2 =[
    {
        // title: "Boston1 Dragon Boat",
        // description: "Wordpress + Client Feedback",
        imgURL: Boston1,
        URL: 'https://boston1.org'
    }]

const project3 =[
    {
        // title: "MBTA 65 Bus Tracker",
        // description: "React + Axios Calls",
        imgURL: The65Bus,
        URL: 'https://your-weather-forecast.surge.sh'
    }]

return (
    <section className = "projects" id="projects">
        <Container>
            <Row>
                <Col>
{/* https://react-bootstrap.netlify.app/components/navs/#pills */}
                    <Tab.Container id="project-table" defaultActiveKey="first">
                        
                        <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">MBTA 65 Bus Tracker
                            <h6>↓</h6>
                            <h6>React, Axios Calls</h6>
                            </Nav.Link>
                            
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="second">Your Weather Forecast
                            <h6>↓</h6>
                            <h6>HTML, CSS, Javascript</h6>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="third">Boston1 Dragon Boat
                            <h6>↓</h6>
                            <h6>WordPress</h6>
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {project3.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                            
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Row>
                                {project1.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">
                                <Row>
                                {project2.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>

                    </Tab.Container>

                </Col>
            </Row>
        </Container>
    </section>
)
}