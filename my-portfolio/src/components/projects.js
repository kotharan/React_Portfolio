import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardActions, CardMenu, CardTitle, Button } from 'react-mdl';
import { FacebookShareButton, GooglePlusShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, GooglePlusIcon } from 'react-share';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Hackahon Project*/}
                    <Card shadow={6} style={{ borderRadius: '5%', width: '31%', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '14rem', background: 'url(https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?auto=compress&cs=tinysrgb&h=350) center / cover' }}>Hackathon Project</CardTitle>
                        <CardText align="center">
                            Yet not decided what to eat tonight?? <br />
                            Come join us, we will help you.
                </CardText>
                        <CardActions border>
                            <Button style={{ width: '50%', 'font-weight': 'bold' }} colored href="https://team-delicious.herokuapp.com/home" target="_blank" rel="noopener noreferrer">Decide NOW!</Button>
                            <Button style={{ width: '40%' }} target="_blank" colored><a href="https://github.com/kotharan/Hackathon_team_delicious" target="_blank" style={{ display: 'block' }} rel="noopener noreferrer" > <i title="Open this Project on GitHub" className="fa fa-github" aria-hidden="true" style={{ color: 'black', 'font-size': '2.2em' }} /></a>{/*Github*/}</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <GooglePlusShareButton style={{ 'padding-bottom': '1%' }} url="https://team-delicious.herokuapp.com/home"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                            <FacebookShareButton style={{ 'padding-top': '10%' }} url="https://team-delicious.herokuapp.com/home" quote="An amazing way of deciding what you should eat today"><FacebookIcon size="27" round="true"></FacebookIcon></FacebookShareButton>
                            <WhatsappShareButton style={{ 'padding-top': '10%' }} title="Check out this page" url="https://team-delicious.herokuapp.com/home"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                        </CardMenu>
                    </Card>
                    {/*OSU Basic Newsletter*/}
                    <Card shadow={6} style={{ borderRadius: '5%', width: '31%', margin: 'auto' }}>
                        <CardTitle className="NewsLetter" style={{ color: '#fff', height: '14rem', width: '80%', 'text-align': 'center', margin: 'auto' }}></CardTitle>
                        <CardText align="center" >
                            <b> Class Project</b> <br />
                            Debate on college textbooks prices.
                </CardText>
                        <CardActions border>
                            <Button style={{ width: '50%', 'font-weight': 'bold' }} colored href="https://kotharan.github.io/NewsLetter/" target="_blank" rel="noopener noreferrer">Join Our Committe</Button>
                            <Button style={{ width: '40%' }} target="_blank" colored><a href="https://github.com/kotharan/NewsLetter" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}> <i title="Open this Project on GitHub" className="fa fa-github" aria-hidden="true" style={{ color: 'black', 'font-size': '2.2em' }} /></a>{/*Github*/}</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'orange' }}>
                            <GooglePlusShareButton style={{ 'padding-bottom': '10%' }} url="http://www.facebook.com/sharer.php?u=https://kotharan.github.io/NewsLetter/"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                            <a href="http://www.facebook.com/sharer.php?u=https://kotharan.github.io/NewsLetter/" target="_blank" rel="noopener noreferrer"><FacebookIcon size="27" round="true"></FacebookIcon></a>
                            <WhatsappShareButton style={{ 'padding-top': '10%' }} title="Check out this page" url="https://kotharan.github.io/NewsLetter/"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 1) { /*C++ LeetCode Solutions*/
            return (
                <div className="projects-grid">
                    <Card shadow={6} style={{ borderRadius: '5%', width: '31%', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '14rem', background: 'url(https://leetcode.com/static/images/LeetCode_Sharing.png) center / cover' }}></CardTitle>
                        <CardText align="center" >
                            <b> Personal Interest</b> <br />
                            In process of solving all the interview questions posted on LeetCode. Have a look, it might help you for your next interview.
                    </CardText>
                        <CardActions border>
                            <Button style={{ width: '50%', 'text-transform': 'capitalize', 'font-weight': 'bold' }} colored href="https://leetcode.com/explore/" target="_blank" rel="noopener noreferrer">Explore LeetCode</Button>
                            <Button style={{ width: '40%' }} target="_blank" colored><a href="https://github.com/kotharan/LeetCode_Solutions" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}> <i title="Open this Project on GitHub" className="fa fa-github" aria-hidden="true" style={{ color: 'black', 'font-size': '2.2em' }} /></a>{/*Github*/}</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <GooglePlusShareButton style={{ 'padding-bottom': '10%' }} url="http://www.facebook.com/sharer.php?u=https://github.com/kotharan/LeetCode_Solutions"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                            <a href="http://www.facebook.com/sharer.php?u=https://github.com/kotharan/LeetCode_Solutions" target="_blank" rel="noopener noreferrer"><FacebookIcon size="27" round="true"></FacebookIcon></a>
                            <WhatsappShareButton style={{ 'padding-top': '10%' }} title="Check out this page" url="https://github.com/kotharan/LeetCode_Solutions"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) { /*Python LeetCode Solutions*/
            return (

                <div className="projects-grid">
                    <Card shadow={6} style={{ borderRadius: '5%', width: '31%', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '14rem', background: 'url(https://i.gifer.com/T148.gif) center / cover' }}></CardTitle>
                        <CardText align="center" >
                            <b> Personal Interest</b> <br />
                            In process of solving all the interview questions posted on LeetCode. Have a look, it might help you for your next interview.
                    </CardText>
                        <CardActions border>
                            <Button style={{ width: '50%', 'text-transform': 'capitalize', 'font-weight': 'bold' }} colored href="https://leetcode.com/explore/" target="_blank" rel="noopener noreferrer">Explore LeetCode</Button>
                            <Button style={{ width: '40%' }} target="_blank" colored><a href="https://github.com/kotharan/LeetCode_Solutions" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}> <i title="Open this Project on GitHub" className="fa fa-github" aria-hidden="true" style={{ color: 'black', 'font-size': '2.2em' }} /></a>{/*Github*/}</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <GooglePlusShareButton style={{ 'padding-bottom': '10%' }} url="http://www.facebook.com/sharer.php?u=https://github.com/kotharan/LeetCode_Solutions"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                            <a href="http://www.facebook.com/sharer.php?u=https://github.com/kotharan/LeetCode_Solutions" target="_blank" rel="noopener noreferrer"><FacebookIcon size="27" round="true"></FacebookIcon></a>
                            <WhatsappShareButton style={{ 'padding-top': '10%' }} title="Check out this page" url="https://github.com/kotharan/LeetCode_Solutions"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
<div>
    <h2 align='center' style={{fontFamily:'anton' , color:'white' ,background:'#444' ,borderRadius:'50px',marginTop:'-50px' , marginRight:'200px',marginLeft:'200px'}}>YouTube Channel for Tech Reviews</h2>
                <div className="projects-grid">


                <Card shadow={6} style={{ borderRadius: '5%', width: '31%', margin: 'auto' }}>
                        <CardTitle className="YouTube1" style={{ color: '#fff', height: '14rem'}}></CardTitle>  {/*background applied in app.css */}
                        <CardText align="center" >
                            <b> Personal Interest</b> <br />
                            This video will help you pick the best microphone for your YouTube Channel Videos
                    </CardText>
                        <CardActions border>
                            <Button style={{ width: '100%' ,'text-transform': 'capitalize', 'font-weight': 'bold'}} target="_blank" colored><a href="https://youtu.be/-sr-JytkHvs" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}> <i title="Open this Project on YouTube" className="fa fa-youtube" aria-hidden="true" style={{ color: 'black', 'font-size': '2.2em' }} /></a>{/*YouTube*/}</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <GooglePlusShareButton style={{ 'padding-bottom': '10%' }} url="http://www.facebook.com/sharer.php?u=https://youtu.be/-sr-JytkHvs"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                            <a href="http://www.facebook.com/sharer.php?u=https://youtu.be/-sr-JytkHvs" target="_blank" rel="noopener noreferrer"><FacebookIcon size="27" round="true"></FacebookIcon></a>
                            <WhatsappShareButton style={{ 'padding-top': '10%' }} title="Check out this video" url="https://youtu.be/-sr-JytkHvs"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                        </CardMenu>
                    </Card>



                    <Card shadow={6} style={{ borderRadius: '5%', width: '31%', margin: 'auto' }}>
                        <CardTitle className="YouTube" style={{ color: '#fff', height: '14rem'}}></CardTitle>  {/*background applied in app.css */}
                        <CardText align="center" >
                            <b> Personal Interest</b> <br />
                            This video will help you pick the best microphone for your YouTube Channel Videos
                    </CardText>
                        <CardActions border>
                            <Button style={{ width: '100%' ,'text-transform': 'capitalize', 'font-weight': 'bold'}} target="_blank" colored><a href="https://youtu.be/1a9Z9aCjPWU" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}> <i title="Open this Project on YouTube" className="fa fa-youtube" aria-hidden="true" style={{ color: 'black', 'font-size': '2.2em' }} /></a>{/*YouTube*/}</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <GooglePlusShareButton style={{ 'padding-bottom': '10%' }} url="http://www.facebook.com/sharer.php?u=https://youtu.be/1a9Z9aCjPWU"><GooglePlusIcon size={27} round={true} /></GooglePlusShareButton>
                            <a href="http://www.facebook.com/sharer.php?u=https://youtu.be/1a9Z9aCjPWU" target="_blank" rel="noopener noreferrer"><FacebookIcon size="27" round="true"></FacebookIcon></a>
                            <WhatsappShareButton style={{ 'padding-top': '10%' }} title="Check out this video" url="https://youtu.be/1a9Z9aCjPWU"><WhatsappIcon size="27" round="true"></WhatsappIcon></WhatsappShareButton>
                        </CardMenu>
                    </Card>
                </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">

                <div className="inner-project-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple style={{ 'margin-top': '2%', 'margin-bottom': '4%' }}>
                        <Tab style={{ 'font-weight': 'bold' }}>HTML / CSS / JS</Tab>
                        <Tab style={{ 'font-weight': 'bold' }}>C++</Tab>
                        <Tab style={{ 'font-weight': 'bold' }}>Python</Tab>
                        <Tab style={{ 'font-weight': 'bold' }}><i title="Open this Project on YouTube" className="fa fa-youtube" aria-hidden="true" style={{ color: 'black', 'font-size': '2.0rem' }} /></Tab>
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