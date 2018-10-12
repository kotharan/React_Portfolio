import React , {Component} from 'react';
import {Tabs,Tab , Grid, Cell ,Card , CardText , CardActions , CardMenu , IconButton , CardTitle, Button} from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
    if(this.state.activeTab === 0)
        {
            return(
                <Card shadow={6} style={{width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?auto=compress&cs=tinysrgb&h=350) center / cover'}}>Hackathon Project</CardTitle>
                <CardText >
                   Yet not decided what to eat tonight?? <br/>
                   Come join us, we will help you.
                </CardText>
                <CardActions border>
                    <Button style={{width: '100%'}} colored href="https://team-delicious.herokuapp.com/home" target="_blank">Decide NOW!</Button>
                    <Button target="_blank" colored><a href="https://github.com/kotharan/Hackathon_team_delicious" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github" aria-hidden="true" style={{ color : 'black' , 'font-size': '30px' }}/></a>{/*Github*/}</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton hre name="share" /><br/>
                    
                </CardMenu>
            </Card>
            
            
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
                <Tab>HTML / CSS / JS</Tab>
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