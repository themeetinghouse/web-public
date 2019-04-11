import React from 'react';
import './pageHeaderQuestionBar.scss';
import HelpOutline from '@material-ui/icons/HelpOutline';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { IconButton } from '@material-ui/core';
import { AppContext } from '../AppContextProvider';

export class PageHeaderQuestionBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.contextQuestion || ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.getClickHandler = this.getClickHandler.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    getClickHandler(context){
        return () => context.updateContext('question', this.state.value);
    }

    render(){
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className="page-header-question-bar">
                        <IconButton color="primary" className="ask-button" onClick={this.handleClick}><div className="icon-button-text">?</div></IconButton>
                        <input placeholder='Questions welcome.' onChange={this.handleChange} value={this.state.value}></input>
                        <IconButton color="primary" className="ask-button" onClick={this.getClickHandler(context)}><ArrowForward className="arrow"></ArrowForward></IconButton>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}