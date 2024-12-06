import projImg1 from "../../../../public/assets/indiabiztimes.png";
import projImg2 from "../../../../public/assets/educred.png";
import projImg3 from "../../../../public/assets/googlepay.png";
import projImg4 from "../../../../public/assets/qr.png";
import projImg5 from "../../../../public/assets/weatherForecast.png";
import projImg6 from "../../../../public/assets/pincode.png";
// import colorSharp2 from "../../../../public/assets/color-sharp2.png";
import ChatBot from "../../../../public/assets/Chatbot.png";
import Dummy from "../../../../public/assets/dummy.jpg"
export const Projects = [
    {
        id: 0,
        title: "IndiaBizTimes",
        agenda: "India's Top Headlines",
        date: "July 2022 to August 2022",
        description: "IndiaBizTimes is a responsive web based news application that provides the latest top headlines of India across various categories.",
        image: projImg1,
        tags: [
            "React JS",
            "News API",
            "Bootstrap",
            "CSS",
            "HTML",
            "Node JS",
        ],
        github: "https://github.com/ChewangGyalpuBhutia/IndiaBizTimes.git",
        website: "https://chewanggyalpubhutia.github.io/IndiaBizTimes/",
    },

    {
        id: 1,
        title: "Google Pay Clone",
        agenda: "Clone application",
        date: "September 2023 to November 2023",
        description: "This is a clone of the Google Pay application. This is just a demonstration of the pay app, which utilizes sessions for secure data storage",
        image: projImg3,
        tags: [
            "React JS",
            "Bootstrap",
            "CSS",
            "HTML",
            "Sessions"
        ],
        github: "https://github.com/ChewangGyalpuBhutia/GooglePayClone.git",
        website: "https://chewanggyalpubhutia.github.io/GooglePayClone/",
    },
    {
        id: 2,
        title: "Indian Weather Forecast",
        agenda: "Weather Forecasting Application",
        date: "May 2022 to July 2022",
        description: "A weather forecasting application that provides information about weather as well as weather forecasts for up to 5 days at a selected location in India",
        image: projImg5,
        tags: [
            "React JS",
            "weather API",
            "Forecast API",
            "Geo-location API",
            "Bootstrap",
            "CSS",
            "HTML",
        ],
        github: "https://github.com/ChewangGyalpuBhutia/WeatherForecast",
        website: "https://chewanggyalpubhutia.github.io/WeatherForecast/",
    },

    {
        id: 3,
        title: "QR Application",
        agenda: "Qr scanner and generator",
        date: "May 2023 to June 2023",
        description: "This is simple application which provides features like generating QRs and scanning QR",
        image: projImg4,
        tags: [
            "QR library",
            "Bootstrap",
            "CSS",
            "HTML",
            "Express JS",
            "My Sql"
        ],
        github: "https://github.com/ChewangGyalpuBhutia/QrScannerAndGenerator",
        website: "https://chewanggyalpubhutia.github.io/QrScannerAndGenerator/",
    },
    {
        id: 4,
        title: "EDUCRED",
        agenda: "Student Rewarding Framework",
        date: "May 2023 to August 2023",
        description: "For your convinence, Teacher username&password:admin & Student username&password:prashant  EduCred is a student-rewarding framework designed to enhance academic performance of the students. Visit Github Readme file for username and password",
        image: projImg2,
        tags: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Ajax",
            "JQuery",
            "PHP MyAdmin",
            "PWA"
        ],
        github: "https://github.com/ChewangGyalpuBhutia/EduCred.git",
        website: "https://educ-red.000webhostapp.com/",
    },

    {
        id: 5,
        title: "ZIP Code Application",
        agenda: "Provide Information related to zipcode",
        date: "June 2023 to July 2023",
        description: "This Application provides locality associated with pincode and also provides the geo-location of the locality",
        image: projImg6,
        tags: [
            "Zipcode API",
            "React JS",
            "Bootstrap",
            "CSS",
            "HTML",
            "JavaScript"
        ],
        github: "",
        website: "",
    },
    {
        id: 6,
        title: "AI Chatbot",
        agenda: "ChatBot powered by LLM",
        date: "June 2024 to July 2024",
        description: "Built a chatbot powered by LLM to demonstrate AI integration capabilities..",
        image: ChatBot,
        tags: [
            "Django",
            "OpenAI API",
            "Docker",
            "Route 53",
            "EC2",
            "Bootstrap",
        ],
        github: "https://github.com/ChewangGyalpuBhutia/ChatBot.git",
        website: "",

    },
    {
        id: 7,
        title: "React Native Video Application",
        agenda: "Video Streaming Application",
        date: "November 2023 to December 2023",
        description: "A video streaming application built using React Native, featuring the Vigora library for video playback and state management.",
        image: Dummy,
        tags: [
            "React Native",
            "Vigora",
            "JavaScript",
            "Expo",
            "CSS",
        ],
        github: "https://github.com/ChewangGyalpuBhutia/VideoCallApplication",
        // website: projImg2,
    },
    {
        id: 8,
        title: "To-Do Application (React Native)",
        agenda: "Task Management Application",
        date: "October 2023",
        description: "A task management application developed in React Native to track daily tasks with state management and persistent storage.",
        image: Dummy,
        tags: [
            "React Native",
            "AsyncStorage",
            "JavaScript",
            "CSS",
        ],
        github: "https://github.com/ChewangGyalpuBhutia/ToDoApp.git",
    },
    {
        id: 9,
        title: "To-Do Application (React, Express, MongoDB)",
        agenda: "Full-Stack Task Management",
        date: "August 2024 to September 2024",
        description: "A task management application developed using React for the frontend, Express.js for the backend, and MongoDB for database storage.",
        image: Dummy,
        tags: [
            "React",
            "Express.js",
            "MongoDB",
            "Node.js",
            "CSS",
        ],
        github: "https://github.com/ChewangGyalpuBhutia/ReunionFrontend.git",
        website: "https://chewanggyalpubhutia.github.io/ReunionFrontend/",
    },

]