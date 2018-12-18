import React , {Component} from 'react';
import {Grid , Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return (
            <div style={{width: '100' , margin: 'auto'}}>
               <Grid className= "landing-grid"  >
                    <Cell col={12}>
                    
                    <img className="avatar-img" src={require("./photos/contact.jpeg")} alt ="avatar"  />
                   
                    <div className= "banner-text">   
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                    
                    
                    <div className="social-links">
                        <a href="https://github.com/kotharan" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github" aria-hidden="true"/></a>{/*Github*/}
                        <a href="https://www.linkedin.com/in/anand-kothari/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin-square" aria-hidden="true"/></a> {/*LinkedIn*/} 
                    </div>
                    </div>
                    </Cell>
                    
               </Grid>
               
            </div>
        )
    }

}

export default LandingPage;