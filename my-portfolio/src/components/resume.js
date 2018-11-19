import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Resume extends Component {
    render(){
        return (
            <div>
                <Grid>
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
                
                    <Cell col={8} className="resume-right-col">Right Side</Cell>   
                </Grid>    
               
            </div>
        )
    }

}

export default Resume;