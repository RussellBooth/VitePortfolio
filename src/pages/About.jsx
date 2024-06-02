import me from '../assets/me.jpg';
import '../styles/pages.css';

export default function About () {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <img src={me} alt="Photo of Russell Booth"></img>
                <p>
                    Heya, I am Russell Booth.
                    I have a background in mathematics, with a B.A. from CSU Sacramento. 
                    I have tutored various level of math since 2017, with the main level being high school. 
                    I taught middle school math for the 2022-2023 school year. 
                    Outside of mathematics I have a passion for music and the outdoors. 
                    I love to go on hikes and camping whenever I am able to. 
                    The notable places I've been camping and hiking have been: Yosemite, Tahoe, Yreka, and Ocean Cove; but wish to explore the PCT someday as well as other National Parks. 
                    When I am home I enjoy playing video games and finding new music to listen to, and spending times with friends playing D&D. 
                    With other free vacation time I like to attend music festivals and connect with people with backgrounds different than my own.
                    Starting in December of 2023, I have been learning full-stack development and have been learning a lot and building my skills as a web-developer.
                    There has been many frustrations learning it, but I have learned a lot and had more fun learning it than I ever thought I would.
                </p>
        </div>
    );
}