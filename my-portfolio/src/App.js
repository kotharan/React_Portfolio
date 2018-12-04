import React, { Component } from 'react';
import { Layout , Header , Navigation , Drawer , Content} from 'react-mdl'; 
import './App.css';
import Main from './components/main.js';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content ">
    <Layout>
        <Header className="header-color " title="My Portfolio " scroll>
            <Navigation>
                <Link to="./" ><a href="./" style={{color:'white', "font-size": '189%', padding: 'auto'}}><i className="fa fa-home" /></a></Link>
                <Link to="/resume" style={{fontFamily:'lobster',fontWeight:'italics',fontSize:'150%'}}>Resume</Link>
                <Link to="/aboutme" style={{fontFamily:'lobster',fontWeight:'italics',fontSize:'150%'}}>About Me</Link>
                <Link to="/projects" style={{fontFamily:'lobster',fontWeight:'italics',fontSize:'150%'}}>Projects</Link>
                <Link to="/contacts" style={{fontFamily:'lobster',fontWeight:'italics',fontSize:'150%'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer>
        <Navigation>
                <Link to="./" ><a href="./" style={{color:'black', "font-size": '25px', padding: '10px' , opacity:'0.5'}}><i className="fa fa-home" /></a></Link>
                <Link to="/resume">Resume </Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content " />
            <Main/>
        </Content>
    </Layout>
      </div>
    );
  }
}

export default App;
