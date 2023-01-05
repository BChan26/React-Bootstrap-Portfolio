import Forecast from '../assets/img/Forecast.png'
import Boston1 from '../assets/img/Boston1.png'
import The65Bus from '../assets/img/The65Bus.png'
import Hollygram from '../assets/img/Hollygram.png'
import TickIt from '../assets/img/TickIt.png'
import TeacherTracker from '../assets/img/TeacherTracker.png'
import {ProjectCard} from './ProjectCard'


import {Container, Row, Col, Tab} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';


export const Projects = () => {

const project1 =[
    {
        // title: "Weather Forecast",
        // description: "HTML, CSS, Javascript, APIs",
        imgURL: Forecast,
        URL: 'https://your-weather-forecast.surge.sh'
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
        URL: 'https://65bus.netlify.app'
    }]

const project4 =[
    {
        // title: "Holiday Instagram Clone",
        // description: "PERN Full Stack w/ CRUD & Auth",
        imgURL: Hollygram,
        URL: 'https://hollygram.netlify.app/'
    }]

const project5 =[
    {
        imgURL: TickIt,
        // URL: ''
    }]

const project6 =[
    {
        imgURL: TeacherTracker,
        // URL: ''
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
                            <Nav.Link eventKey="first">Holiday Instagram
                            <h6>↓</h6>
                            <h6>PERN Full-Stack App</h6>
                            </Nav.Link>
                            
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="second">MBTA 65 Bus Tracker
                            <h6>↓</h6>
                            <h6>React w/ Axios Calls</h6>
                            </Nav.Link>
                            
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="third">Weather Forecast
                            <h6>↓</h6>
                            <h6>HTML, CSS, Javascript</h6>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Boston1 Dragon Boat
                            <h6>↓</h6>
                            <h6>WordPress</h6>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Hackathon Group Project
                            <h6>↓</h6>
                            <h6>Python & Django w/ Auth</h6>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="sixth">Teacher Documentation Tool
                            <h6>↓</h6>
                            <h6>Full-Stack w/ Flowbite, Python, Django</h6>
                            </Nav.Link>
                        </Nav.Item>

                        </Nav>

                        

                        <Tab.Content>
                            
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {project4.map((project, index) => {
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

                            <Tab.Pane eventKey="third">
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

                            <Tab.Pane eventKey="fourth">
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

                            <Tab.Pane eventKey="fifth">
                                <Row>
                                {project5.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="sixth">
                                <Row>
                                {project6.map((project, index) => {
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