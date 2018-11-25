import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './resumeComponents/education';
import Experience from './resumeComponents/workexperience';
import Skills from './resumeComponents/skills';

class Resume extends Component {
    render(){
        return (
            <div className="resume-page">
            <div>                <Grid>
                    <Cell col={4} className="resume-left-col">
                        <div style={{textAlign: 'center'}}>
                        <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="avatar" style={{height:'200px'}}/> 
                        </div>
                        <h2 style={{paddingTop:'2em', fontFamily:'Antom'}}>Anand Kothari</h2>
                        <h4 style={{color:'grey'}}>Hello</h4>
                        <hr style={{borderTop: '3px solid #033fb1' , width:'50%'}}/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <hr style={{borderTop: '3px solid #033fb1' , width:'50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker way Menlo Park, 31646 </p>
                        <h5>Phone</h5>
                        <p>(123) 456-080</p>
                        <h5>Email</h5>
                        <p>Some@oregonstate.edu</p>
                        <h5>Web</h5>
                        <p>Webxyz.com</p>
                        <hr style={{borderTop: '3px solid #033fb1' , width:'50%'}}/>
                    </Cell>    
                
                    <Cell col={8} className="resume-right-col">
                   
                    <h2>Education</h2>
                    <hr style={{borderTop: ' 5px dotted white'}}/>

                    <h4 style={{marginTop: ' 0px'}}>Oregon State Univeristy <span style={{position:'absolute',left:'85%',fontSize:'80%' }}> GPA: 3.58 </span></h4>
                        <Education
                        startYear={2016}
                        endYear={2018}
                        schoolCoursework={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                        />
                    <hr style={{borderTop: ' 5px solid #e22947'}}/>

                    <h2 style={{paddingTop: '4%'}}> Experience</h2>
                    <hr style={{borderTop: ' 5px dotted white'}}/>

                    <h4 style={{marginTop: ' 0px'}}>Outdoor School  |  OSU Extension Service </h4>
                    <Experience
                    startYear={'Mar 2018'}
                    endYear={'Present'}
                    jobName={'Backend Developer & Data Analyst'}
                    jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                    />

                    <Experience
                    startYear={'May 2017'}
                    endYear={'Present'}
                    jobName={'Student IT Technician'}
                    jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                    />
                    
                    <hr style={{borderTop: ' 5px solid #e22947'}}/>
                    <h2 style={{paddingTop: '4%'}}>Technical Skills</h2>
                    <hr style={{borderTop: ' 5px dotted white'}}/>
                    <Skills/>
                    </Cell>  {/* End of right col of Resume page*/}
                </Grid>    
                </div>

            </div>
        )
    }

}

export default Resume;