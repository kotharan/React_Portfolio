import React , {Component} from 'react';
import {Tabs,Tab} from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} on Change={(tabId)=> this.setState({activeTab: tabId})} ripple>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>C++</Tab>
                <Tab>Python</Tab>
                </Tabs>
            </div>
        )
    }

}

export default Projects;