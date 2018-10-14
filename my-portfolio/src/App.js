import React, { Component } from 'react';
import { Layout , Header , Navigation , Drawer , Content} from 'react-mdl'; 
import './App.css';
import Main from './components/main.js';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio Tabs" scroll>
            <Navigation>
                <Link to="./" ><a href="#" style={{color:'white', "font-size": '23px', padding: '10px'}}><i className="fa fa-fort-awesome-sqare" /></a></Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio Tabs">
        <Navigation>
                <Link to="./">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
      </div>
    );
  }
}

export default App;