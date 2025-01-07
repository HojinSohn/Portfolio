import Card from "react-bootstrap/Card";
import {Col, Container, Image, Row, ListGroup, Badge, Button} from 'react-bootstrap';
const Projects = () => {
    const projects = [
        {
            title: "SnapBattle",
            image: "/images/snapbattle.png",
            subtitle: "Mobile App Development (Group of 5)",
            duration: "January - May 2024",
            description: "Group project - CS 307 (Software Engineering I)\n" +
                "● A social media platform mobile application designed for photo-sharing activity with daily prompts.\n" +
                "● Integrated ChapGPT API for random prompt generation\n" +
                "● Contributed mainly on user profile management including images with Firebase configuration and post interaction",
            link: "https://github.com/HojinSohn/SnapBattle",
            skills: ["React Native", "MERN Stack", "Firebase", "Scrum Project Management", "Agile Methodology"],
        },
        {
            title: "Customer Purchases Prediction",
            image: "/images/kaggle.png",
            subtitle: "Machine Learning Model Development",
            duration: "September - December 2024",
            description: "Kaggle Competition Project (CS 37300) \n" +
                "● Developed a machine learning model, XGBoost Classifier, to predict customer purchases using customer, product, and transaction data.\n" +
                "● Utilized RandomizedSearchCV for hyperparameter search \n" +
                "● Achieved 89% validation accuracy and a precision score of 0.00099 (rank 6) on test data",
            link: "https://github.com/HojinSohn/Customer-Purchase-Prediction-Model",
            skills: ["Python (Pandas, Numpy, sklearn)", "Data Cleaning", "Feature Engineering", "Hyperparameter Search", "Model Evaluation"],
        },
        {
            title: "To-Do List Handler",
            image: "/images/todoWeb.png",
            subtitle: "Restful API + CLI + FrontEnd",
            duration: "August 2023",
            description: "● Built a REST API and Webpage that manages to-do lists, including titles, dates, and descriptions\n" +
                "● Implemented CLI (Command-Line Interface) functionality with Python’s Click module, allowing interaction with the application directly through the terminal using custom commands\n",
            link: "https://github.com/HojinSohn/RestAPI-Cli",
            skills: ["HTML", "CSS", "JavaScript", "Python (Flask, Click)", "MySQL", "Command-Line Interface (CLI)", "RESTful API"],
        },
        {
            title: "Matchify",
            image: "/images/Matchify.png",
            subtitle: "Mobile App Development (Independently Built)",
            duration: "June - August 2023",
            description: "● Mobile Application that helps people connect based on music taste\n" +
                "● Implemented a real-time conversation chat system\n" +
                "● Integrated Spotify API and Google Places API for application features",
            link: "https://github.com/HojinSohn/Matchify",
            skills: ["React Native", "Firebase", "API Integration"],
        },
        // Add more projects as needed
    ];

    return (
        <Container className="mt-5">
            <Row className="g-4">
                {projects.map((project, index) => (
                    <Col xs={12} sm={6} md={4} key={index}>
                        <Card className="shadow-lg h-100">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="image-container">
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        alt={project.title}
                                        className="card-img-hover"
                                        style={{ height: "300px", objectFit: "cover" }}
                                    />
                                </div>
                            </a>
                            <Card.Body>
                                <Card.Title className="mb-2">{project.title}</Card.Title>
                                {project.subtitle && (
                                    <Card.Subtitle className="text-muted mb-3">
                                        {project.subtitle}
                                    </Card.Subtitle>
                                )}
                                <Card.Text className="mb-2">
                                    {project.duration}
                                </Card.Text>
                                <Card.Text style={{ whiteSpace: 'pre-line' }}>{project.description}</Card.Text>
                                <div className="mt-3">
                                    {project.skills.map((skill, skillIndex) => (
                                        <Badge
                                            bg="primary"
                                            key={skillIndex}
                                            className="me-2 mb-2"
                                            style={{ fontSize: "0.85rem" }}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default Projects