import React , {Component} from 'react';
import {Grid , Cell} from 'react-mdl';

class Contact extends Component {
    render(){
        return (
            <div >
                <div clasName="contact-body">
                <Grid clasName="contact-grid">
                <Cell col={6} > Half Page </Cell>
                <Cell col={6}> Half Page </Cell>
                </Grid>
                </div>

                {/*Remove this code till marked =============-==============...*/}
                <h1>Contact Page </h1>
                <div name="Construction Div">
                <marquee scrollamount="12"><h4><b><i>Please  have a look at other pages like the Project page <br/> this page is still <mark> Under Construction </mark></i></b></h4></marquee>
                <div class="process-message" style={{background: 'url(https://camo.envatousercontent.com/db86611e412313b2469688fde8651c5df93d3f47/687474703a2f2f617072656e646167616d65732e636f6d2f73746f636b2f70726f6d6f2f6a61636b68616d6d65722f636f6c6f727347696630322e676966) no-repeat '}}>
                </div>
                </div>
                  {/*=====================================================REMOVE TILL HERE*/}
            </div>
        )
    }

}

export default Contact;