import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faLinkedin,
  faGithub,
  faInstagram,
  faReact,
  
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faDatabase,
  faEnvelope,
  faLocationDot,
  faPhone,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import cpp from './img/cpp.svg';
import React, { useEffect, useState } from "react";
import webdesign_photo from "./img/7706581-removebg-preview.png";
import webdev_photo from "./img/webdevelopment.png";
import coding_photo from "./img/coading.png";
import profile_photo from "./img/photo.jpg";
import pythonfordata from "./img/pythonfordata.jpg";
import programming_java from "./img/programming_java.jpg";
import dbms from "./img/dbms.jpg";

function Profile() {
  return (
    <div id="profile">
      <div id="photo">
        <img src={profile_photo} alt="img" />
      </div>
      <div id="name">
        <h2>Karuna Polipilli</h2>
      </div>
      {/* <div id="work">Aspiring Software Engineer</div> */}
      <div id="details">
        <div id="email">
          <div className="icons">
            <div id="skills_fa">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <div id="email_text">
            Email
            <br />
            karunapolipilli08@gmail.com
          </div>
        </div>
        <div id="phone">
          <div className="icons">
            <div id="skills_fa">
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
          <div id="phone_text">
            Phone
            <br />
          
          </div>
        </div>
        <div id="location">
          <div className="icons">
            <div id="skills_fa">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
          <div id="location_text">
            Location
            <br />
            Vizag, Andhra Pradesh, India
          </div>
        </div>
        <div id="contact">
          <span className="contact_icons" onClick={()=>window.open("https://www.linkedin.com/in/karunapolipilli","_blank")}>
            <div id="skills_fa">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </span>
          <span className="contact_icons" onClick={()=>window.open("https://github.com/karunapolipilli")}>
            <div id="skills_fa">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </span>
          <span className="contact_icons" onClick={()=>window.open("https://www.instagram.com/karunasmiley/")}>
            <div id="skills_fa">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <div>
        <h2 id="about_heading">About Me</h2>
      </div>
      <div id="about_text">
     <p> Hi, I'm Karuna, a passionate Software Engineer specializing in building innovative and efficient solutions.
     My expertise spans<br />  both front-end and back-end technologies, and I enjoy tackling complex challenges to
      create seamless user experiences.</p>
      <p>For me, software engineering is not just about coding — it's about 
      problem-solving, optimizing performance, and contributing to impactful projects that make a difference in the digital world.
      My journey has been driven by a deep curiosity and a desire to understand how technology can improve lives. Let's connect and create something extraordinary!</p> 
       
      </div>
      <div>
        <h2 id="about_heading2">What I'm Doing</h2>
        <div id="skills_layout">
          <div id="webdesign" className="web">
            <img src={webdesign_photo} alt="img" />
            <div id="webdesign_text">
              <h3>Web Design</h3>
              <p>
                The most modern and high-quality design model at a professional
                input
              </p>
            </div>
          </div>
          <div id="webdevelopment" className="web">
            <img src={webdev_photo} alt="img" id="imgphoto1" />
            <div id="webdevelopment_text">
              <h3>Web Development</h3>
              <p>High-Quality Development skills</p>
            </div>
          </div>
          <div id="coding" className="web">
            <img src={coding_photo} alt="img" />
            <div id="coding_text">
              <h3>Coading</h3>
              <p>Good at Coading </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="overskills">
      <div>
        <h2 id="skills_heading">Skills</h2>
      </div>
      <div id="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faJava} />
          </div>
          <h3>Java</h3>
          <p>Object-Oriented Programming Language.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            {/* <FontAwesomeIcon icon={faPython} /> */}
            <img src={cpp} alt="C++" className="custom-icon" />
          </div>
          <h3>C++</h3>
         
          <p>Powerful Programming & Game development,system programming.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faPython} />
          </div>
          <h3>Python</h3>
         
          <p>Powerful scripting & AI development.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <h3>HTML</h3>
          <p>Structuring the web pages.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <h3>CSS</h3>
          <p>Styling and design for the web.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <h3>JavaScript</h3>
          <p>Interactive and dynamic web development.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <h3>React</h3>
          <p>
            framework of JavaScript, to make responsive and dynamic webpages
          </p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <h3>Node.js</h3>
          <p>Backend development using JavaScript.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <h3>Express.js</h3>
          <p>Fast and lightweight web framework.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <h3>MongoDB</h3>
          <p>NoSQL database for scalable apps.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <h3>Github</h3>
          <p>Collabration and connections</p>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    
   /* <div id="resume_page">
      <div id="resume_heading">
        <h2>Resume</h2>
      </div>
      <FontAwesomeIcon id="education_icons" icon={faBook} />
      <h3 id="education_heading">Education</h3>
      <div id="education">
        <div id="education_decoration">
          <div id="dot1" className="dot"></div>
          <div id="dot2" className="dot"></div>
          <div id="dot3" className="dot"></div>
        </div>
        <div id="education_details">
          <div id="btech">
            <h4>B.Tech</h4>
            <p>
              Electrical and Electronics Engineering
              <br />
              2022-2026
              <br />
              Vignan's institute of Engineering For Women|Duvvada,Vskp.
            </p>
          </div>
          <div id="inter">
            <h4>Intermediate</h4>
            <p>
              MPC
              <br />
              2020-2022
              <br />
              Sri Kasyap jn.College|Ramatalkies,Vizag
            </p>
          </div>
          <div id="school">
            <h4>High School</h4>
            <p>
              SSC
              <br />
              2015-2020
              <br />
              ZPHigh School|Thotagaruvu,Vizag
            </p>
          </div>
        </div>
      </div>
      */
      <div id="certifications">
        
        <h3 id="certifications_heading">Certifications</h3>
        <div id="Certifi_main">
        <div id="certifications_set">
          <div className="certifications">
          <img src={programming_java} alt="img" />
          </div>
          <div className="certifications">
          <img src={pythonfordata} alt="img" />
          </div>
          <div className="certifications">
          <img src={dbms} alt="img" />
          </div>
          </div>
        </div>
      </div>
   
  );
}

function Projects() {
  return (
    <div id="projects_page">
      <div id="projects_heading">
        <h2>Projects</h2>
      </div>
      <div id="projects_set">
        <div className="projects">
          <h3>Portfolio</h3>
          <p>
            A personal portfolio website to showcase my skills, experience, and
            projects.
          </p>
          <h4>Technologies:</h4>
          <p>HTML, CSS, JavaScript, React, Node.js, Express.js ,MongoDB</p>
        </div>
        <div className="projects">
          <h3>Plant Disease Detection</h3>
          <p>
            Identifies plant diseases from leaf images using a Convolutional Neural Network (CNN) model for accurate classification.
            
          </p>
          <h4>Technologies:</h4>
          <p>React JS, Tensorflow,Gradio</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[message,setMsg]=useState("")
   const formData={name,email,message}

 const handleSubmit = async (e) => {
    e.preventDefault();
    try{
     const response = await fetch('https://portfolio-backend-mae6.onrender.com/user/add-user', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     
     });
   
   if(response.ok){
     alert('Contact added successfully!');
     } else {
       alert('Error adding contact');
     }
   } catch (error) {
     alert('Error: ' + error.message);
   }

  };

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <h2>Contact me</h2>
          <br />
        </div>
        <div id="txtmail">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              id="fname"
              name="firstname"
              onChange={(e)=>setName(e.target.value)}
            ></input>
            <br />
            <br />
          </div>
          <span>
            <div>
              <input
                type="email"
                placeholder="Email address"
                id="mailid"
                name="mailid"
                onChange={(e)=>setEmail(e.target.value)} 
              ></input>
            </div>
            <br />
          </span>
        </div>
        <br />
        <div>
          <input type="text" placeholder="Type Message" id="msg"  onChange={(e)=>setMsg(e.target.value)}></input>
        </div>
        <br />{" "}
        <div>
          <input type="submit" value="Send Message" id="submit"></input>
        </div>
      </form>
    </div>
  );
}

function Content({ currentPage }) {
  let content;
  if (currentPage === "about") {
    content = (
    <>
    <About />
    </>);
  } else if (currentPage === "skills") {
    content = <Skills />;
  } else if (currentPage === "resume") {
    content = <Resume />;
  } else if (currentPage === "projects") {
    content = <Projects />;
  } else if (currentPage === "contact") {
    content = <Contact />;
  }
  return <div id="content">{content}</div>;
}

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-backend-mae6.onrender.com/api/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.name} - {contact.email}</li>
        ))}
      </ul>
    </div>
  );
}

function Main({ currentPage }) {
  return (
    <main id="main">
      <Profile />
      <Content currentPage={currentPage} />
    </main>
  );
}

export default Main;
