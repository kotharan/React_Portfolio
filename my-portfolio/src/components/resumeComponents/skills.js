import React ,{Component} from "react";
import {Grid,Cell, ProgressBar} from 'react-mdl';


class Skills extends Component{
    render(){
        return(
            <Grid>
            <Cell col={12}>
                <div style={{display:'inline-flex'}}> 
                {this.props.skill + " "} 
                <div class="progress">
  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={this.props.skillvalue} aria-valuemin="0" aria-valuemax="100" style={{width:this.props.skillvalue}}>
    40% Complete (success)
  </div>
                </div>
</div>
                </Cell>
            </Grid>
            )
    }
}

export default Skills;