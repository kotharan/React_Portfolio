import React ,{Component} from "react";
import {Grid,Cell} from 'react-mdl';


class Skills extends Component{
    render(){
        return(
            <Grid >
            <Cell col={6} >
                <div style={{display:'flex'}}> 
                {this.props.BEskill} 
                <div class="progress" style={{width:'50%',marginLeft:'2%',marginBottom:'auto'}}>
                    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={this.props.BEskillvalue} aria-valuemin="0" aria-valuemax="100" style={{width:this.props.BEskillvalue}}>
                    </div>
                </div>
                </div>
                </Cell>
            </Grid>
            )
    }
}

export default Skills;