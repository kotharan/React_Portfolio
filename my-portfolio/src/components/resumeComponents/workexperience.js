import  React, {Component} from "react";
import {Grid,Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <div>
                <Grid>   
                    <Cell col={2}>Left</Cell>
                    <Cell col={5}> Mid</Cell>   
                    <Cell col={5}>Right</Cell>  
                </Grid>
            </div>

        )
    }
}

export default Experience;