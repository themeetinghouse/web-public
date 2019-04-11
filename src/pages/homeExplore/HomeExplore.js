import React from 'react';
import { MuiThemeProvider, Grid, IconButton } from '@material-ui/core';
import Close from '@material-ui/icons/Close'
import DoubtDeconstructionImage from '../../assets/images/doubt-deconstruction.jpg';
import DoubtImage from '../../assets/images/doubt-thumbnail.png';
import SermonImage from '../../assets/images/questioningGod.png';
import PodcastImage from '../../assets/images/podcast-banner.jpg';
import KidmaxImage from '../../assets/images/kidmax-john-livingWater.png';
import EarsToHearImage from '../../assets/images/ears-to-hear.png';
import RenewImage from '../../assets/images/renew.png';
import GoodFridayImage from '../../assets/images/good-friday.jpg';
import EasterImage from '../../assets/images/easter.jpg';
import { darkTheme } from '../../themes';
import './homeExplore.scss';
import SermonCard from '../../components/cards/SermonCard/SermonCard';
import { KidmaxCard } from '../../components/cards/KidmaxCard/KidmaxCard';
import { BaseCard } from '../../components/cards/BaseCard/BaseCard';
import { withContext } from '../../components/AppContextProvider';

const NUM_COLUMNS = 4;

export class HomeExplore extends React.Component {

    content = [
        {
            id: "doubt-6168",
            type: "SERMON",
            title: "Doubt",
            image: DoubtImage,
            speaker: "Jimmy Rushton",
            timestamp: "March 31, 2019",
            description: "Jimmy Rushton explores the biblical precedent for doubt in our walk with Jesus. ",
            seriesId: "doubt-deconstruction-and-jesus",
            seriesTitle: "Doubt, Deconstruction, and Jesus",
            seriesImage: DoubtDeconstructionImage,
            likes: 56,
            comments: 124
        },
        {
            id: "1b",
            type: "SERMON",
            title: "Week 1: Why does God allow so much suffering?",
            image: SermonImage,
            speaker: "Bruxy Cavey",
            timestamp: "April 27, 2004",
            description: "Life leads to questions, no matter what we believe. Faith in God answers some questions, and raises a host of others. In this series we embrace the…",
            seriesId: "1s",
            seriesTitle: "Questioning God - Inviting Seekers, Skeptics and Inquiring Minds",
            seriesImage: SermonImage,
            likes: 56,
            comments: 124
        },
        {
            id: "2",
            type: "KIDMAX",
            title: "John / Living Water | Kids: Episode 01",
            image: KidmaxImage,
            timestamp: "February 3, 2019",
            description: "In this series, kids will get to know even more about who Jesus is and how he gives us so much more than we could ever ask or imagine. Jesus welcomes us into …",
            likes: 56,
            comments: 124
        },   
        {
            id: "3",
            type: "PODCAST",
            title: "From US Military to Pacifist: Interview with Joseph Medina",
            image: PodcastImage,
            speaker: "Bruxy Cavey & Joseph Medina",
            timestamp: "February 12, 2017",
            description: "Bruxy interviews Joseph Medina, former US Military who served for 17 years in the Armed Forces. Joseph shares his journey, lessons from the army that we …",
            likes: 56,
            comments: 124
        },       
        {
            id: "4",
            type: "BLOG",
            title: "Ears to Hear - Learning from Women's Voices",
            image: EarsToHearImage,
            speaker: "Bruxy Cavey",
            timestamp: "January 24, 2019",
            description: "Each year at The Meeting House we have a Peace & Reconciliation series that addresses important social and relational issues within secular society and …",
            likes: 56,
            comments: 124
        },       
        {
            id: "5",
            type: "EVENT",
            title: "Family Celebration Renew",
            image: RenewImage,
            timestamp: "Mar 17 | 5:15pm – 7:30pm",
            description: "From the small to the tall, all are welcome to join us for an evening of celebration and worship. Kick off the night with a pizza party, then a time of musical worship with some fun ways that will engage our kids. End the night together with dessert. We’ll provide the pizza and dessert – you bring the sides!",
            likes: 56,
            comments: 124
        },       
        {
            id: "6",
            type: "EVENT",
            title: "Good Friday 2019",
            image: GoodFridayImage,
            timestamp: "April 19 | 9:30 & 11:15 am (Oakville), 10:00 am (Regional sites), ",
            description: "From the small to the tall, all are welcome to join us for an evening of celebration and worship. Kick off the night with a pizza party, then a time ...",
            likes: 56,
            comments: 124
        },       
        {
            id: "7",
            type: "EVENT",
            title: "Easter 2019",
            image: EasterImage,
            timestamp: "April 21 | 8:00, 9:30 & 11:15 am (Oakville), 10:00 am (Regional sites), ",
            description: "From the small to the tall, all are welcome to join us for an evening of celebration and worship. Kick off the night with a pizza party, then a time of ... ",
            likes: 56,
            comments: 124
        },       
    ]

    constructor(props){
        super(props);

        // Create some fake items for the explore page
        for (let i=0; i<20; i++){
            let newContent = {...this.content[i]};
            newContent.id = i + this.content.length;
            this.content.push(newContent);
            
        }

        this.getItemClickHandler = this.getItemClickHandler.bind(this);
        this.getClearQuestionHandler = this.getClearQuestionHandler.bind(this);
    }

    getItemClickHandler(context){
        return (event) => {
            let item = this.content.find(contentItem => contentItem.id === event.currentTarget.id);
            console.log("HomeExplore.handleItemClick(): item = %o", item);
    
            if (item.type === "SERMON"){
                this.props.navChanged(null, 'teaching')
                this.props.history.push("/home/teaching/sermons/" + item.seriesId + "/" + item.id);
            } else if (item.type === "PODCAST"){
                this.props.navChanged(null, 'teaching')
                this.props.history.push("/home/teaching/podcasts");
            }
        }
    }

    getClearQuestionHandler(context){
        return () => context.updateContext('question', '');
    }

    render(){

        const colContent = [];
        for (let i=0; i<NUM_COLUMNS; i++){
            colContent.push([]);
        }


        this.content.forEach((contentItem, index) => {
            if (contentItem.type === "SERMON"){
                colContent[index%NUM_COLUMNS].push(<SermonCard key={contentItem.id} contentItem={contentItem} handleClick={this.getItemClickHandler(this.props.context)}/>);
            } else if (contentItem.type === "KIDMAX"){
                colContent[index%NUM_COLUMNS].push(<KidmaxCard key={contentItem.id} contentItem={contentItem} handleClick={this.getItemClickHandler(this.props.context)}/>);
            } else {
                colContent[index%NUM_COLUMNS].push(<BaseCard key={contentItem.id} contentItem={contentItem} handleClick={this.getItemClickHandler(this.props.context)}/>);
            }
        })

        return (
            <div className="home-explore">
            <MuiThemeProvider theme={darkTheme}>
                { this.props.context.question && (
                    <div className="context-question">
                        <div className="question-text-container">
                            <div className="question-text">You asked: <span className="question-value">'{this.props.context.question}'</span>  Here's what we found...</div>
                            <div className="question-sub-text">Didn't find what you were looking for?  Why not <a href="#">make a suggestion</a> or <a href="#">start a discussion</a>?</div>
                        </div>
                        <div className="question-close">
                            <IconButton onClick={this.getClearQuestionHandler(this.props.context)}><Close></Close></IconButton>
                        </div>
                    </div>
                )}
                <Grid container spacing={24}>
                    <Grid item xs={12 / NUM_COLUMNS}>
                        {colContent[0]}
                    </Grid>
                    <Grid item xs={12 / NUM_COLUMNS}>
                        {colContent[1]}
                    </Grid>
                    <Grid item xs={12 / NUM_COLUMNS}>
                        {colContent[2]}
                    </Grid>                                
                    <Grid item xs={12 / NUM_COLUMNS}>
                        {colContent[3]}
                    </Grid>                                
                </Grid>
            </MuiThemeProvider>
            </div>
        );
    }
}

export default withContext(HomeExplore);
