import JATE from '../assets/J.A.T.E..png';
const JATEtitle = "Just Another Text Editor";
const JATEgitHub = "https://github.com/RussellBooth/Progressive-Web-Applications-PWA-Text-Editor"
const JATEapp = "https://progressive-web-applications-pwa-text-usng.onrender.com/";
import noteTaker from '../assets/notesSs.png';
const noteTakerTitle = "NoteTaker";
const noteTakergithub = "https://github.com/RussellBooth/NoteTaker";
const noteTakerapp = "https://immense-atoll-95398-dc6d207cef29.herokuapp.com/";
import passGen from '../assets/Password_Generator.png';
const passGenTitle = "Password Generator";
const passGengithub = "https://github.com/RussellBooth/Password-Generator";
const passGenapp = "https://russellbooth.github.io/Password-Generator/";
import READMEGen from '../assets/README_Generator.png';
const READMEtitle = "README Generator";
const READMEgithub = "https://github.com/RussellBooth/README-generator";
const READMEapp = "https://russellbooth.github.io/README-generator/";
import socialAPI from '../assets/Social_Network_API.png';
const socialAPItitle = "Social Network API";
const socialAPIgithub = "https://github.com/RussellBooth/SocialNetworkAPI";
const socialAPIapp = "https://drive.google.com/file/d/1_QUx4MaAs114clV9K9ezgm5jeNpEJcMz/view";
import weatherPlanner from '../assets/Weekly_Weather_Planner.png';
const weatherTitle = "Weekly Weather Planner";
const weathergithub = "https://github.com/awatson622/weekly-weather-planner";
const weatherapp = "https://awatson622.github.io/weekly-weather-planner";

import Project from '../components/projects';
import '../styles/pages.css';

export default function Portfolio () {
    return (
        <>
            <Project img={JATE} title={JATEtitle} github={JATEgitHub} app={JATEapp}></Project>
            <Project img={noteTaker} title={noteTakerTitle} github={noteTakergithub} app={noteTakerapp}></Project>
            <Project img={passGen} title={passGenTitle} github={passGengithub} app={passGenapp}></Project>
            <Project img={READMEGen} title={READMEtitle} github={READMEgithub} app={READMEapp}></Project>
            <Project img={socialAPI} title={socialAPItitle} github={socialAPIgithub} video={socialAPIapp}></Project>
            <Project img={weatherPlanner} title={weatherTitle} github={weathergithub} app={weatherapp}></Project>
        </>
    );
}