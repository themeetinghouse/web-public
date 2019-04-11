import React from 'react';
import { Link } from 'react-router-dom';
import './suggestedQuestions.scss';

export function SuggestedQuestions(props){
    let questions = [];
    props.questions.forEach(question => 
        questions.push(<Link to={question.link}><div key={question.id} className='question'>{question.text}</div></Link>)
    );

    return (
        <div className={"suggested-questions " + (props.visible ? 'visible' : '')}>
            <div className="title">{props.title}</div>
            <div className="questions">
                { questions }
            </div>
            <div className="more-link">more...</div>
        </div>

    )
}