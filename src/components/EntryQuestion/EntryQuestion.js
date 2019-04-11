import React from 'react';
import './entryQuestion.scss';
import { Fab, InputBase } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { AppContext } from '../AppContextProvider';


export class EntryQuestion extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            questionValue: props.contextQuestion
        }
        this.handleChange = this.handleChange.bind(this);
        this.getClickHandler = this.getClickHandler.bind(this);
    }

    handleChange(event){
        this.setState({questionValue: event.target.value});
    }

    getClickHandler(context){
        return (event) => {
            context.updateContext('question', this.state.questionValue);
            this.props.handleClick(event);
        }
    }

    render(){
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className='entry-question'>
                        <div className='title'>Questions? Welcome.</div>
                        <div className="input-container">
                            <InputBase className="input-field" value={context.question} onChange={this.handleChange}></InputBase>
                            <Fab color="primary" onClick={this.getClickHandler(context)}><ArrowForward></ArrowForward></Fab>
                        </div>
                            
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
    
}