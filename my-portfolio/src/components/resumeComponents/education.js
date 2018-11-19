import  React, {Component} from "react";
import {Grid,Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <div>
                <Grid>   
                    <Cell col={2}><p>{this.props.startYear} - {this.props.endYear}</p></Cell>
                    <Cell col={5}> <p>Bachelors of Science, Computer Science <br/>Minor - Business and Entreprenuership</p></Cell>   
                    <Cell col={5}><p><b><i>Coursework: </i></b><br/>{this.props.schoolCoursework}</p></Cell>  
                </Grid>
            </div>

        )
    }
}

export default Education;