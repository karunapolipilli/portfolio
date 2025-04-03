import React from "react";
import profile_photo from "../img/photo.jpg";
import pythonfordata from "../img/pythonfordata.jpg";
import programming_java from "../img/programming_java.jpg";
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

function Profile() {
  let profile = (
    <div id="profile_section">
      <div id="photo">
        <img src={profile_photo} alt="img" />
      </div>
      <div id="mobile_name">
        <h2>Karuna Polipilli</h2>
      </div>
      <div id="work">Web Developer</div>
      <div id="details">
        <div id="email">
          <div className="contact_icons">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div id="email_text">
            Email
            <br />
            karunapolipilli08@gmail@gmail.com
          </div>
        </div>
        <div id="phone">
          <div className="contact_icons">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div id="phone_text">
            Phone
            <br />
            6305083835
          </div>
        </div>
        <div id="location">
          <div className="contact_icons">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div id="location_text">
            Location
            <br />
            Vizag, Andhra Pradesh, India
          </div>
        </div>
        <div id="social_icons">
          <span className="social_icons" onClick={()=>window.open("https://www.linkedin.com/in/karunapolipilli","_blank")}>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span className="social_icons"onClick={()=>window.open("https://github.com/karunapolipilli")}>
            <FontAwesomeIcon icon={faGithub} />
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
  return profile;
}

function About() {
  let about = (
    <div id="about_section">
      <div id="mobile_about_heading">
        <h2>About</h2>
      </div>
      <div id="mobile_about_text">
        <p>
        <p> Hi, I'm Karuna, a passionate Software Engineer specializing in building innovative and efficient solutions.</p>
          <br />
          I am a quick learner and a team player.
          <br /> I have experience in developing web applications using React,
          Node.js, and MongoDB.
          <br /> I am looking for opportunities to work on challenging projects
          and contribute to the tech community.
        </p>
        What I'am good at:
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Coding</li>
        </ul>
      </div>
    </div>
  );
  return about;
}
function Skills() {
  let skills = (
    <div id="skills_section">
      <div id="mobile_skills_heading">
        <h2>Skills</h2>
      </div>
      <div id="mobile_skills_set">
        <div className="mobile_skills">
          <h3>Professional Skills</h3>
          <ul>
            <li>Communication skills</li>
            <li>Problem Solving</li>
            <li>DSA</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Frontend Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React (js framework)</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Backend Skills</h3>
          <ul>
            <li>Nodejs (backend language)</li>
            <li>Express.js (framework)</li>
            <li>MongoDB (DataBase)</li>
          </ul>
        </div>
        <div className="mobile_skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
  return skills;
}
function Resume() {
  let resume = (
    <div id="mobile_resume_section">
      <div id="mobile_resume_heading">
        <h2>Resume</h2>
      </div>
      <div id="mobile_resume_set">
        <FontAwesomeIcon id="education_icons" icon={faBook} />
        <h3 id="education_heading">Education</h3>
        <div id="education">
          <div id="mobile_education_decoration">
            <div id="dot1" className="dot"></div>
            <div id="dot2" className="dot"></div>
            <div id="dot3" className="dot"></div>
          </div>
          <div id="education_details">
            <div id="btech">
              <h4>B.Tech</h4>
              <p>
                | Computer Science and Engineering
                <br />
                | 2022-2026
                <br />| Vignan's institute of Engineering For Women|Duvvada,Vizag
              </p>
            </div>
            <div id="inter">
              <h4>Intermidiate</h4>
              <p>
                | MPC
                <br />
                | 2020-2022
                <br />| Sri Kasyap jn.College|Ramatalkies,Vizag
              </p>
            </div>
            <div id="school">
              <h4>High School</h4>
              <p>
                | SSC
                <br />
                | 2015-2020
                <br />| ZPHigh School|Thotagaruvu,Vizag
              </p>
            </div>
          </div>
        </div>
        <div id="certifications">
          <h3 id="certifications_heading">certifications</h3>
            <div className="mobile_certifications">
              <div className="m_certifications">
                <img src={programming_java} alt="img" />
                </div>
            </div>
            <div className="mobile_certifications">
              <div className="m_certifications">
                 <img src={pythonfordata} alt="img" />
                </div>
            </div> 
        </div>
      </div>
    </div>
  );
  return resume;
}
function Projects() {
  let projects = (
    <div id="mobile_project_section">
      <div id="mobile_project_heading">
        <h2>Projects</h2>
      </div>
      <div id="project_set">
        <div className="project">
          <h3>Portfolio</h3>
          <p>
            A personal portfolio website to showcase my skills, experience, and
            projects.
          </p>
          <h4>Technologies:</h4>
          <p>HTML, CSS, JavaScript, React Js, Node.js, Express.js, MongoDB</p>
        </div>
        {/* <div className="project">
          <h3>E-Commerce Webiste</h3>
          <p>
            An e-commerce platform with product listings, cart, and payment
            integration.
          </p>
          <h4>Technologies:</h4>
          <p>React, Node.js, Express, MongoDB</p>
        </div> */}
      </div>
    </div>
  );
  return projects;
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
              id="Fname"
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
          <input type="submit" value="Send Message" id="mobile_submit"></input>
        </div>
      </form>
    </div>
  );
}

export default MobileMain;
