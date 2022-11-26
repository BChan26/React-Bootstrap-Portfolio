import {Col} from "react-bootstrap"

export const ProjectCard = ({title,description,imgURL, URL}) => {
    return (
        <Col>
            <div className = "proj-imgbx">

                <a href={URL} target="_blank" rel="noreferrer"><img className="proj-images" src={imgURL} alt="Icon For Projects"/></a>
                
                <div className="proj-txtx">
                    {/* <h4>{title}</h4> */}
                    
                    <span>{description}</span>
                </div>

            </div>
        </Col>
    )
}