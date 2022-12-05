import {Container, Row, Col} from "react-bootstrap"

import CodingLanguages from '../assets/img/CodingLanguages.png'
import FrameworksLibraries from '../assets/img/FrameworksLibraries.png'
import DeveloperTools from '../assets/img/DeveloperTools.png'

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container className = "allSkillsContent">
                <Row className="row-skills">
                    <Col>
                        <div id="AllItems">

                            <div id="languages">
                                <h4>Languages</h4>
                                <h6>HTML, CSS, Javascript,</h6>
                                <h6>SQL, Python</h6>
                                <img id="languagesImages" src={CodingLanguages} alt="Coding Languages"/>
                                
                            </div>
                            
                            <div id="frameworksAndLibraries">
                                <h4>Frameworks & Libraries</h4>
                                <h6>React, Express, Sequelize,</h6>
                                {/* <h6>Vue.js, Django</h6> */}
                                <img id="frameworksLibraries" src={FrameworksLibraries} alt="Frameworks and Libraries"/>
                            </div>

                            <div id="tools">
                                <h4>Developer Tools</h4>
                                <h6>Node.js, VSCode,</h6>
                                <h6>Git, Github</h6>
                                <img id="developerTools"  src={DeveloperTools} alt="Developer Tools"/>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )








}