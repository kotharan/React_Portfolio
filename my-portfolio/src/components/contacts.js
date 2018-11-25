import React , {Component} from 'react';
import {Grid , Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return (
            <div className="contacts-page" style={{color:'red',margin: 'auto',position: 'fixed',width: '100%',height: '100%','justify-content': 'center','padding-top': '1%'  }}>
                <Grid clasName="contact-grid" style={{color:'red','text-align': 'center','justify-content': 'center',width: '80%',height: '100%',background: 'white','margin-bottom': '20px'}}>
                <Cell col={6} > <h2 className="h2class" style={{paddingBottom:'1%'}}> Anand Kothari</h2>
                <img
                src={require("./photos/contact.jpeg")} alt="avatar" style={{'height':'43%',width:'43%','border':'0','border-radius':'5%', 'box-shadow': '10px 10px 25px grey',marginBottom:'10px'}}
                />
                <div style={{'padding-top':'3%'}}>
                <div className="banner-text" style={{ color:'white'}}>
                <p style={{width:'75%',margin:"auto",paddingTop:'1em' ,fontFamily:'Oxygen',fontWeight:'bold' ,}}>I am glad you landed on this page, I assume that means I can help by contributing to your ongoing or future projects using my skills and experiences mentioned in the Resume. Please feel free to shoot me an email for any help/opportunity, I would be very happy to talk about it. Thank you for your time! </p>
                </div></div>
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
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>  <a href="https://linkedin.com/in/anand-kothari/" target="_blank" rel="noopener noreferrer" >https://linkedin.com/in/anand-kothari/</a>
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                   <i className="fa fa-github-square" aria-hidden="true" /> <a href="https://github.com/kotharan" target="_blank" rel="noopener noreferrer">https://github.com/kotharan</a>
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