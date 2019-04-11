import React from 'react';
import './homeDifferenceOverview.scss';
import DifferenceOpportunitesImage from '../../assets/images/difference-opportunities.png'
import DifferenceGivingImage from '../../assets/images/difference-giving.png'
import DifferenceIdeasImage from '../../assets/images/difference-ideas.png'

export class HomeDifferenceOverview extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="page-difference-overview">
                <h2>What does it mean to be the church?</h2>
                <p>Although we meet in movie theatres on Sunday mornings to have our services, we don't believe that following Christ should be a spectator sport where we live vicariously through the paid religious professional at the front.</p>
                <p>We believe that unless you are fully engaged by meeting regularly with other believers in small groups, helping out as part of the family by volunteering, giving generously to support the ongoing work, and serving your local community through compassion initiatives you are not living the relationally rich life that God has planned for you. Just as he did with the disciples, Jesus called us to follow him.</p>
                <p>So unless you are a spiritual seeker or just checking us out, we're going to be unapologetically asking you to get involved at some level if you have been connnected with us for any length of time. There are many ways that you can use your particular gifts to help out and get connected. We are sure you can find something!</p>
                <div className="difference-overview-container">
                    <div class="difference-item">
                        <img src={DifferenceOpportunitesImage}></img>
                        <div class="difference-item-title">Opportunities</div>
                        <div class="difference-item-description">Find a way to use your skills and passions to help others</div>
                    </div>
                    <div class="difference-item">
                        <img src={DifferenceGivingImage}></img>
                        <div class="difference-item-title">Giving</div>
                        <div class="difference-item-description">Contribute financially to support the good things happening</div>
                    </div>
                    <div class="difference-item">
                        <img src={DifferenceIdeasImage}></img>
                        <div class="difference-item-title">Ideas</div>
                        <div class="difference-item-description">Find others like you who want to get something started</div>
                    </div>
                </div> 
            </div>
        )
    }
}