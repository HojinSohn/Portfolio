import {Image} from "react-bootstrap";
import {useState} from "react";


function ResumePage() {
    const [expand, setExpand] = useState(false);
    const [size, setSize] = useState(50);
    function toggle() {
        setExpand(!expand);
        if (expand) {
            setSize(70);
        } else {
            setSize(50);
        }
    }
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'auto', // Allow scrolling
                backgroundImage: "url('/grey.jpg')",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start', // Align to top for scrolling
                padding: '50px', // Add padding for better spacing
            }}
        >
            <img
                src="/Resume.jpg"
                alt="Image description"
                style={{
                    border: '1px solid black',
                    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
                    borderRadius: '8px',
                    width: expand ? '80%' : '40%', // Toggle width
                    transition: 'width 0.5s ease, transform 0.5s ease', // Smooth resizing
                    cursor: 'pointer', // Change cursor to pointer for interactivity
                }}
                onClick={toggle}
            />
        </div>
    );
}

export default ResumePage;