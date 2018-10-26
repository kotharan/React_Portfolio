import React , {Component} from 'react';
import {Grid , Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return (
            <div style={{color:'red',margin: 'auto',position: 'fixed',width: '100%',height: '100%','justify-content': 'center','padding-top': '2em'  }}>
                <Grid clasName="contact-grid" style={{color:'red','text-align': 'center','justify-content': 'center',width: '80%',height: '550px',background: 'white',color: 'black','margin-bottom': '20px'}}>
                <Cell col={6} > <h2 className="h2class" style={{paddingBottom:'40px'}}> Anand Kothari</h2>
                <img
                src="https://www.beecode.it/skin/frontend/assets/images/coletta.png" alt="avatar" style={{'height':'200px'}}
                />
                <p style={{width:'75%',margin:"auto",paddingTop:'1em' ,fontFamily:'Oxygen',fontWeight:'bold'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                
                </Cell>
                <Cell col={6}> <h2 className="h2class">Contact Me</h2>
                <hr style={{borderTop:'5px dotted orange',width:'50%',margin:'auto'}}/> 
                <div className="contact-list">
                <List>
                <ListItem>
                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                    <i className="fa fa-envelope-open" aria-hidden="true"/> anandkothari96@gmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>  <a href="https://linkedin.com/in/anand-kothari/" target="_blank" >https://linkedin.com/in/anand-kothari/</a>
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                   <i className="fa fa-github-square" aria-hidden="true" /> <a href="https://github.com/kotharan" target="_blank">https://github.com/kotharan</a>
                    </ListItemContent>
                </ListItem>

                </List>
                </div>
                </Cell>
                </Grid>
            
            </div>
        )
    }

}

export default Contact;