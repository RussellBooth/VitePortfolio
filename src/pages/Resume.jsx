import { Link } from 'react-router-dom';
import codingResume from '../assets/codingResume.pdf';
import '../styles/pages.css';

export default function Resume () {
    return (
        <div>
            <h1>Resume Page</h1>
            <Link className='resume'
            to={codingResume} download="resume" target='_blank'
            >Resume</Link>
            <h3>Skills:</h3>
            <ul>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Third-Party & Server-Side APIs</li>
                <li>Object Oriented Programming</li>
                <li>SQL</li>
                <li>ORM</li>
                <li>MVC</li>
                <li>PWA</li>
                <li>MERN stack</li>
                <li>Git</li>
                <li>Mathematics</li>
            </ul>
        </div>
    );
}