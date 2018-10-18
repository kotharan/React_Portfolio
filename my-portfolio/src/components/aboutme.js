import React , {Component} from 'react';


class AboutMe extends Component {
    render(){
        return (
            <div>
                <h1>AboutMe Page </h1>
                <div name="Construction Div">
                    <div class="process-message" style={{background: 'url(http://www.nrgroup.info/img/construction.gif) no-repeat ' ,top:'100' }}>
                    </div>
                    <marquee scrollamount="12"><h4><i><b>Please  have a look at other pages like the Projects page <br/> this page is still <mark> Under Construction </mark></b></i></h4></marquee> 
                </div>
            </div>
        )
    }

}

export default AboutMe;