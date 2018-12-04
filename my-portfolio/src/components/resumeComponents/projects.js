import  React, {Component} from "react";
import {Grid,Cell} from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={5}><span style={{ marginTop: 'auto', fontSize:'1em' }}>{this.props.Date} </span></Cell>
                    <Cell col={7}><h3 style={{ marginTop: '0em' }}>{this.props.ProjHead}</h3><p>{this.props.ProjDetails}</p></Cell>
                </Grid>
            </div>

        )
    }
}

export default Projects;