import Card from "react-bootstrap/Card";
import { Col, Container, Image, Row, ListGroup, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Projects = ({ inView }) => {
    const projects = [
        {
            title: "Controlled LLM Decoding via Hamiltonian Monte Carlo",
            image: `${process.env.PUBLIC_URL}/images/ControlledDecoding.png`,
            subtitle: "Deep Learning Research Project (CS587)",
            duration: "January - May 2025",
            description: "● Designed Hamiltonian Monte Carlo Sampling procedure over GPT-2 token embedding space for controlled text generation with minimal prompt\n" +
                "● Implemented the idea and experimented with Python on the Scholar Cluster provided by Purdue University\n" +
                "● Achieved high control scores in experiments, with sentiment-controlled decoding reaching sentiment scores above 0.8 as evaluated by a pretrained classifier",
            link: "https://github.com/HojinSohn/ControlledDecodingViaHMC",
            skills: ["Python (Transformers, Pandas, PyTorch)", "Deep Learning"],
        },
        {
            title: "SnapBattle",
            image: `${process.env.PUBLIC_URL}/images/snapbattle.png`,
            subtitle: "Mobile App Development (Group of 5)",
            duration: "January - May 2024",
            description:
                "● A social media platform mobile application designed for photo-sharing activity with daily prompts.\n" +
                "● Integrated ChapGPT API for random prompt generation\n" +
                "● Contributed mainly on user profile management including images with Firebase configuration and post interaction",
            link: "https://github.com/HojinSohn/SnapBattle",
            skills: ["React Native", "MERN Stack", "Firebase", "Scrum Project Management", "Agile Methodology"],
        },
        {
            title: "Customer Purchases Prediction",
            image: `${process.env.PUBLIC_URL}/images/kaggle.png`,
            subtitle: "Machine Learning Model Development",
            duration: "September - December 2024",
            description:
                "● Developed a machine learning model, XGBoost Classifier, to predict customer purchases using customer, product, and transaction data.\n" +
                "● Utilized RandomizedSearchCV for hyperparameter search \n" +
                "● Achieved Rank 6 in the class competition on Kaggle with 89% validation accuracy and a precision score of 0.00099 on test data",
            link: "https://github.com/HojinSohn/Customer-Purchase-Prediction-Model",
            skills: ["Python (Pandas, Numpy, sklearn)", "Data Cleaning", "Feature Engineering", "Hyperparameter Search", "Model Evaluation"],
        },
        {
            title: "To-Do List Handler",
            image: `${process.env.PUBLIC_URL}/images/todoWeb.png`,
            subtitle: "Restful API + CLI + FrontEnd",
            duration: "August 2023",
            description: "● Built a REST API and Webpage that manages to-do lists, including titles, dates, and descriptions\n" +
                "● Implemented CLI (Command-Line Interface) functionality with Python’s Click module, allowing interaction with the application directly through the terminal using custom commands\n",
            link: "https://github.com/HojinSohn/RestAPI-Cli",
            skills: ["HTML", "CSS", "JavaScript", "Python (Flask, Click)", "MySQL", "Command-Line Interface (CLI)", "RESTful API"],
        },
        {
            title: "Matchify",
            image: `${process.env.PUBLIC_URL}/images/Matchify.png`,
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

    const handleProjectClick = (projectLink) => {
        window.open(projectLink, '_blank');
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Container className="mt-5">
                <Row className="g-4" style={{ marginTop: 10 }}>
                    {projects.map((project, index) => (
                        <Col xs={12} sm={6} md={4} key={index}>
                            <Card
                                className="shadow-lg h-100 card-img-hover"
                                onClick={() => handleProjectClick(project.link)}
                                style={{ cursor: 'pointer' }}>
                                <div>
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        alt={project.title}

                                        style={{ height: "300px", objectFit: "cover" }}
                                    />
                                </div>
                                <Card.Header style={{
                                    height: "100px", alignContent: "space-between"
                                }}>
                                    <Card.Title style={{ height: "50%" }}>
                                        {project.title}
                                        {project.subtitle && (
                                            <Card.Subtitle className="text-muted">
                                                {project.subtitle}
                                            </Card.Subtitle>
                                        )}
                                    </Card.Title>
                                    <Card.Subtitle style={{ height: "50%", alignContent: "end", justifyItems: "end" }}>
                                        <Card.Text className="text-muted">
                                            {project.duration}
                                        </Card.Text>
                                    </Card.Subtitle>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text style={{ whiteSpace: 'pre-line' }}>{project.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ height: "120px" }}>
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
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default Projects;