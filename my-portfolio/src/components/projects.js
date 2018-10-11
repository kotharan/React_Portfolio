import React , {Component} from 'react';
import {Tabs,Tab , Grid, Cell} from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
    if(this.state.activeTab === 0)
        {
            return(
                <div><h1>This is React Tab 0</h1></div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is tab 1</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is tab 2</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is tab 3</h1></div>
            )
        }
    }

    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>C++</Tab>
                <Tab>Python</Tab>
                </Tabs>
                

            <section className="projects-grid">
            <Grid className="projects-grid">
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
           
            </section>
            </div>
        )
    }

}

export default Projects;