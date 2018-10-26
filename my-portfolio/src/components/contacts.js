import React , {Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import '../App.css';

class Contact extends Component {
    render(){
        return (
            <div clasName="contact-body" style={{color:'red',margin: 'auto',background : 'grey',position: 'fixed',width: '100%',height: '100%','justify-content': 'center','padding-top': '2em'  }}>
                <Grid clasName="contact-grid" style={{color:'red','text-align': 'center','justify-content': 'center',width: '80%',height: '550px',background: 'white',color: 'black',border: '2px solid red','border-radius':'10px','margin-bottom': '20px'}}>
                <Cell col={6} > <h2 className="h2class"> Anand Kothari</h2>
                <img
                src="https://www.beecode.it/skin/frontend/assets/images/coletta.png" alt="avatar" style={{'height':'200px'}}
                />
                <p style={{width:'75%',margin:"auto",paddingTop:'1em' ,fontFamily:'Oxygen',fontWeight:'bold'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                
                </Cell>
                <Cell col={6}> <h2 className="h2class">Contact Me</h2><hr style={{borderTop:'5px dotted orange',width:'50%',margin:'auto'}}/> </Cell>
                </Grid>
            
            </div>
        )
    }

}

export default Contact;