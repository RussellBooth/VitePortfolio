import { Link } from 'react-router-dom';
import { React, useState } from 'react';

import '../styles/pages.css';
import'../styles/project.css';

function Project(props) {

    const hoverData = 
        <Link to={props.app} className='link' target="_blank">
            {props.title} {props.github}
        </Link>;
    const [hover, setHover] = useState(false);
    const onHover = (e) => {
        e.preventDefault();
        setHover(true);
    };
    const hoverOver = (e) => {
        e.preventDefault();
        setHover(false);
    };
    return(
        <div className='img-ctnr'>
            <img 
                onMouseOver={(e) => onHover(e)}
                onMouseLeave={(e) => hoverOver(e)}
                alt="Just Another Text Edititor image"
                src={props.img}
            />
            {hover && <div onMouseOver={(e) =>onHover(e)} className="hover-link">{hoverData}</div>}
        </div>
    )
}

export default Project;