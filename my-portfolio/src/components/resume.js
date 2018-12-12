import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './resumeComponents/education';
import Experience from './resumeComponents/workexperience';
import Skills from './resumeComponents/skills';
import Projects from './resumeComponents/projects';
import { FacebookShareButton, GooglePlusShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, GooglePlusIcon } from 'react-share';


class Resume extends Component {
    render() {
        return (
            <div className="resume-page">
                <div>                <Grid>
                    <Cell col={4} className="resume-left-col">
                        <div style={{ textAlign: 'center',height: '14.5em' ,width:'80%', position:'flex', marginLeft:'10%'}}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="avatar" style={{ height: '100%' }} />
                        </div>
                        
                        <h2 style={{ paddingTop: '1em', fontFamily: 'Antom' }}>Anand Kothari</h2>
                        <hr style={{ borderTop: '3px solid #033fb1', width: '50%' }} />
                        <p>Inquisitive, energetic computer science specialist skilled in leadership, with a strong foundation in math, logic, and cross-platform coding. Seeking to leverage solid skills in collaboration, communication, and development as a Web/Software Developer</p>
                        <hr style={{ borderTop: '3px solid #033fb1', width: '50%' }} />
                        <h5>Address</h5>
                        <p>426 NW 11th Street </p>
                        <h5>Email</h5>
                        <p>anandkothari96@gmail.com</p>
                        <h5>Important Links</h5>
                        <p>https://linkedin.com/in/anand-kothari/</p>
                        <hr style={{ borderTop: '3px solid #033fb1', width: '50%' }} />
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                    <div style={{ height:'2.5em', textAlign:'center',width:'17%' ,float:'right'}}>
                    <a href={require('./photos/Resume.pdf')} download="Anand_Kothari_Resume.pdf"> <i title="Download in PDF"  style={{ color: 'yellow', 'font-size': '2.1em' }} class="fa fa-download shareButton" aria-hidden="true"/></a>
                    <GooglePlusShareButton className="shareButton" style={{ float:'right' ,margin:'1%'}} url="https://kotharan.github.io/React_Portfolio/#/resume"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                    <FacebookShareButton className="shareButton" style={{ float:'right' ,margin:'1%' }} url="https://kotharan.github.io/React_Portfolio/#/resume" quote="An amazing way of deciding what you should eat today"><FacebookIcon size="27" round="true"></FacebookIcon></FacebookShareButton>
                    <WhatsappShareButton className="shareButton" style={{ float:'right' ,margin:'1%'  }} title="Check out this page" url="https://kotharan.github.io/React_Portfolio/#/resume"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                    </div>

                        <h2 >Education</h2>
                        <hr style={{ borderTop: ' 5px dotted white' }} />

                        <h4 style={{ marginTop: ' 0px' }}>Oregon State Univeristy <span style={{ position: 'absolute', left: '85%', fontSize: '80%' }}> GPA: 3.58 </span></h4>
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolCoursework={"Analysis of Algorithms, Data Structures, Web Technology, Software Engineering I & II, Computer Architecture & Assembly Language, Operating Systems, Software usability , Cloud Application Development [APIs]"}
                        />
                        <hr style={{ borderTop: ' 5px solid #e22947' }} />

                        <h2 style={{ paddingTop: '2%' }}> Experience</h2>
                        <hr style={{ borderTop: ' 5px dotted white' }} />

                        <h4 style={{ marginTop: ' 0px' }}>Outdoor School  |  OSU Extension Service </h4>
                        <Experience
                            startYear={'Mar 2018'}
                            endYear={'Dec 2018'}
                            jobName={'Backend Developer & Data Analyst'}
                            jobDescription={<ul>
                                <li>Created online surveys with multiple logic functions which made their applications 3 times faster</li>
                                <li>Developed robust code in Python to increase work automation by 85% using various libraries like panda, glob , os and others</li>
                                </ul>}
                        />

                        <Experience
                            startYear={'May 2017'}
                            endYear={'Dec 2018'}
                            jobName={'Student IT Technician'}
                            jobDescription={<ul>
                                <li>Built and Imaged laptops as per University standards for all staff and faculty at the Corvallis campus as well as OSU
Extension campuses. Also, diagnosed and repair personal computers of students and faculty</li>
                                <li>Helped troubleshooting Drivers, BIOS errors and network related issues. Provided Remote Support.</li>
                                <li>Provided Networking(TCP/IP) configuration and other services using software like TeamDynamix, ResDesk and Rave Alert</li>
                                </ul>}
                        />

                        <hr style={{ borderTop: ' 5px solid #e22947' }} />
                        <h2 style={{ paddingTop: '2%' }}>Technical Skills</h2>
                        <hr style={{ borderTop: ' 5px dotted white' }} />

                        <Skills
                            BEskill="Java"
                            BEskillvalue={'50%'}
                            FEskill="HTML"
                            FEskillvalue={'90%'}
                            DBskill="SQL [Oracle & MySQL]"
                            DBskillvalue={'85%'}

                        />
                        <Skills
                            BEskill="C++"
                            BEskillvalue={'75%'}
                            FEskill="CSS"
                            FEskillvalue={'90%'}
                            DBskill="PostgreSQL"
                            DBskillvalue={'62%'}
                        />
                        <Skills
                            BEskill="JavaScript with Node.js "
                            BEskillvalue={'60%'}
                            FEskill="Bootstrap"
                            FEskillvalue={'80%'}
                            DBskill="MongoDB"
                            DBskillvalue={'72%'}
                        />
                        <Skills
                            BEskill="Python"
                            BEskillvalue={'65%'}
                            FEskill="Restful APIs"
                            FEskillvalue={'75%'}
                            DBskill="Ruby On Rails"
                            DBskillvalue={'70%'}
                        />

                        <hr style={{ borderTop: ' 5px solid #e22947' }} />
                        <h2 style={{ paddingTop: '2%' }}> Projects & Event Experience</h2>
                        <hr style={{ borderTop: ' 5px dotted white' }} />

                        <Projects
                            Date=" September 2017 - April 2018 | Team of 3"
                            ProjHead=" Graduate Teaching Assistant Web Application"
                            ProjDetails={<ul>
                                <li>Capstone project based on server-side web application implemented in Ruby with MVC framework Rails using Agile Methodology</li>
                                <li>Appointed as a full-stack developer to fullfil project requirements specified by our clients</li>
                                <li>Stores data in open-source relational database, PostgreSQL and is deployed on Heroku</li>
                            </ul>}
                        />
                        <Projects
                            Date="March 2017 - May 2017 | 1-person project"
                            ProjHead="Cloud Application Development"
                            ProjDetails={<ul>
                                <li>Containerized RESTful APIs using Docker to create a Yelp lik Web Application</li>
                                <li>Implemented in JavaScript and utilized Docker images of MySQL and MongoDB</li>
                                <li>Packages Used: Express, Nodemon, SuperAgent</li>
                            </ul>}
                        />
                        <Projects
                            Date="August 2018 | Team of 3"
                            ProjHead="Hackathon 3.0"
                            ProjDetails={<ul>
                             <li>Web Application helps to decide a meal as per calories and allergies</li>   
                             <li>Placed 2<sup>nd</sup> out of 20 teams, URL - <a href="https://team-delicious.herokuapp.com/daily">https://team-delicious.herokuapp.com/daily</a></li>   
                             <li>Includes working with: APIs, Node JS, Handlebars, Bootstrap and Heroku</li>   
                            </ul>}
                        />
                    </Cell>  {/* End of right col of Resume page*/}
                </Grid>
                </div>
            </div>
        )
    }

}

export default Resume;