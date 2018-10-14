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
            <div className="projects-grid"> 
            {/*Hackahon Project*/} 
            <Card shadow={6} style={{width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?auto=compress&cs=tinysrgb&h=350) center / cover'}}>Hackathon Project</CardTitle>
                <CardText align="center">
                   Yet not decided what to eat tonight?? <br/>
                   Come join us, we will help you.
                </CardText>
                <CardActions border>
                    <Button style={{width: '50%','font-weight':'bold'}} colored href="https://team-delicious.herokuapp.com/home" target="_blank">Decide NOW!</Button>
                    <Button style={{width: '40%'}} target="_blank" colored><a href="https://github.com/kotharan/Hackathon_team_delicious" target="_blank" style={{display: 'block'}} rel="noopener noreferrer" > <i className="fa fa-github" aria-hidden="true" style={{ color : 'black' , 'font-size': '30px' }}/></a>{/*Github*/}</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton hre name="share" /><br/>
                    
                </CardMenu>
            </Card>
            {/*OSU Basic Newsletter*/}
            <Card shadow={6} style={{width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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', width:'fit-content', 'text-align': 'center', margin: 'auto'}}>OSU Basic Newsletter</CardTitle>
                <CardText align="center" >
                  <b> Class Project</b> <br/>
                   Debate on college textbooks prices.
                </CardText>
                <CardActions border>
                    <Button style={{width: '50%', 'font-weight':'bold'}} colored href="https://kotharan.github.io/NewsLetter/" target="_blank">Join Our Committe</Button>
                    <Button style={{width: '40%'}} target="_blank" colored><a href="https://github.com/kotharan/NewsLetter" target="_blank" rel="noopener noreferrer" style={{display: 'block'}}> <i className="fa fa-github" aria-hidden="true" style={{ color : 'black' , 'font-size': '30px' }}/></a>{/*Github*/}</Button>  
                </CardActions>
                <CardMenu style={{color: '#000'}}>
                    <IconButton hre name="share" /><br/>
                    
                </CardMenu>
            </Card>
            
            </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid"> {/*C++ LeetCode Solutions*/}
                <Card shadow={6} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://leetcode.com/static/images/LeetCode_Sharing.png) center / cover'}}></CardTitle>
                    <CardText align="center" >
                      <b> Personal Interest</b> <br/>
                       In process of solving all the interview questions posted on LeetCode. Have a look, it might help you for your next interview.
                    </CardText>
                    <CardActions border>
                        <Button style={{width: '50%' , 'text-transform':'capitalize' , 'font-weight':'bold'}} colored href="https://leetcode.com/explore/" target="_blank">Explore LeetCode</Button>
                        <Button style={{width: '40%'}} target="_blank" colored><a href="https://github.com/kotharan/LeetCode_Solutions"  target="_blank" rel="noopener noreferrer" style={{display: 'block' }}> <i className="fa fa-github" aria-hidden="true" style={{ color : 'black' , 'font-size': '30px' }}/></a>{/*Github*/}</Button>  
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton hre name="share" /><br/>
                        
                    </CardMenu>
                </Card>
             </div>
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
                
                <div className="inner-project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple style={{'margin-top': '20px' , 'margin-bottom': '5em'}}>
                <Tab style={{'font-weight': 'bold'}}>HTML / CSS / JS</Tab>
                <Tab  style={{'font-weight': 'bold'}}>C++</Tab>
                <Tab  style={{'font-weight': 'bold'}}>Python</Tab>
                </Tabs>
                </div>
               
                

           
            <Grid >
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
           
           
            </div>
        )
    }

}

export default Projects;