import {
    Col,
    Container,
    Image,
    Row,
    FormText,
    Tabs,
    Tab,
    Badge,
    Button
} from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import ReactCardFlip from 'react-card-flip';
import {useState} from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import WorkExperiences from "../Components/WorkExperiences";
import Projects from "../Components/Projects";
import ProfileCard from "../Components/ProfileCard";
import { useInView } from "react-intersection-observer";

function HomePage() {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [key, setKey] = useState('home');
    const [scale, setScale] = useState(0.95);

    function rotateCard() {
        setRotated(!rotated); // Toggle the rotation state
    }

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    function linkedInClicked() {
        window.open('https://www.linkedin.com/in/hojinsohn820/', '_blank');
    }

    function githubClicked() {
        window.open('https://github.com/HojinSohn', '_blank');
    }

    function resumeClicked() {
        navigate('/resume');
    }

    const { ref: projectRef, inView: projectInView } = useInView({ rootMargin: '50% 0% -50% 0%' });
    const { ref: experienceRef, inView: experienceInView } = useInView({ rootMargin: '50% 0% -50% 0%' });

    return (
        <Container fluid className="d-flex flex-column align-items-center"
            style={{ background: '#F3F4F6', minHeight: '100vh', paddingTop: '100px' }}
        >
            <ProfileCard/>
            <FormText className="text-center" style={{ marginTop: '90px', fontSize: '2rem', color: '#333' }}>
                Projects
            </FormText>
            <div ref={projectRef}> 
                <Projects inView={projectInView}/>
            </div>
            <FormText className="text-center" style={{ marginTop: '90px', fontSize: '2rem', color: '#333' }}>
                Work Experience
            </FormText>
            <div ref={experienceRef} style={{ margin: '10px' }}> 
                <WorkExperiences inView={experienceInView}/>
            </div>
        </Container >
    );
}
export default HomePage;