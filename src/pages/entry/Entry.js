import React from 'react';
import { Link } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { EntryQuestion } from '../../components/EntryQuestion';
import './entry.scss';
import logo from '../../assets/images/TMH-logo-words-white.png';
import { SuggestedQuestions } from '../../components/SuggestedQuestions';
import { Button, Grid, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SwipeableViews from 'react-swipeable-views';
import { AppContext } from '../../services/Context';
import { withContext } from '../../components/AppContextProvider';

class Entry extends React.Component {

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff'
            },
            secondary: {
                main: '#f44336',
            },
        },
    });

    constructor(props){
        super(props);
        this.state = {
            questionsVisible: [{visible: false}],
            selectedCategory: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.swipeView = this.swipeView.bind(this);
    }

    handleClick(){
        console.log("Entry.handleClick()");
        this.props.history.push("/home/explore");
    }

    handleBackClick(){
        this.setState({selectedCategory: null});
    }

    getQuestionClickHandler(question){
        return () => {
            this.props.context.updateContext('question', question.text);
            this.handleClick();
        }
    }

    componentDidMount(){
        this.showQuestionSet();
    }
    
    showQuestionSet(){
        setTimeout(_ => {
            console.log("Entry.showQuestionSet()")
            const questionsVisible = this.state.questionsVisible;
            let q = questionsVisible.find(qv => qv.visible === false);
            console.log("q = %o", q);
            if (q && !q.visible){
                q.visible = true;
                console.log("q = %o!", q);
                this.setState({questionsVisible: questionsVisible});
                this.showQuestionSet();
            }
        }, 2000);
    }

    swipeView(category){
        this.setState({selectedCategory: category});
    }
    
    render(props){

        if (this.state.redirect){
            return <Link to='/explore'></Link>
        }
    
        let questionCatergories = [
            { id: 1, text: "I am new to The Meeting House", link: "/home/explore"  },
            { id: 2, text: "I have questions about Jesus", link: "/home/explore"  },
            { id: 3, text: "I'm looking for community", link: "/home/explore"  },
            { id: 4, text: "I'm finding life tough right now", link: "/home/explore"  },
            { id: 5, text: "I'm a TMH regular", link: "/home/explore"  },            
        ]
        
        let outsideQuestions = [
            { id: 1, text: "How do you know Jesus really existed?", link: "/home/explore" },
            { id: 2, text: "If God is so loving, why is he letting me suffer so much?", link: "/home/explore"  },
            { id: 3, text: "Do dogs go to heaven when they die?", link: "/home/explore"  },
        ];
    
        let insideQuestions = [
            { id: 1, text: "Are you guys fun to hang out with?", link: "/home/explore"  },
            { id: 2, text: "What's going on for people under 35?", link: "/home/explore"  },
            { id: 3, text: "How do I get connected?", link: "/home/explore"  },
            { id: 4, text: "How do I find people who are interestead in what I'm interested in?", link: "/home/explore"  },
        ];

        console.log("this.state.selectedCategory == %o", this.state.selectedCategory);
        let questions = [];
        let index = 0;
        if (this.state.selectedCategory){
            questions = (this.state.selectedCategory.id % 2) === 1 ? insideQuestions : outsideQuestions;
            index = 1;
        };
    
        const questionsVisible = this.state.questionsVisible;
        console.log('questionsVisible: %o',questionsVisible)

        return (
            <MuiThemeProvider theme={this.theme}>
                <div className="page-entry page">
                    <img className="entry-logo" src={logo}/>
                    <div>
                        <EntryQuestion handleClick={this.handleClick}></EntryQuestion>
                    </div>
                    <div className="entry-explore">
                        <Button color="primary" variant="outlined" size="large" to='/explore' onClick={this.handleClick}>Let me explore...</Button>
                    </div>
                    
                    <div className={'questions-container ' + ((questionsVisible[0].visible) ? 'visible' : ''  )}>
                        <div>
                            <div className="question-options-header">Let us help you find what you need...</div>
                        </div>
                        <SwipeableViews index={index}>
                            <div>
                                <div className="question-option-categories">
                                    <Grid container style={{flexGrow: 1}} direction='row' justify='center' alignItems='stretch' spacing={24}>
                                    { questionCatergories.map(qc => (
                                        <Grid key={qc.id} xs={2} item>
                                            <div className="question-option-category-container">
                                                <Button color="primary" variant="outlined" className="question-option-category" onClick={(e) => this.swipeView(qc)}>{qc.text}</Button>
                                            </div>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </div>
                            </div>
                            <div>
                                <Grid container style={{flexGrow: 1}} direction='row' justify='center' alignItems='stretch' spacing={8}>
                                { questions.map(q => (
                                    <Grid key={q.id} xs={12} item>
                                        <div className="question-container">
                                            <Button color="primary" variant="text" className="question-option" onClick={this.getQuestionClickHandler(q  )}>{q.text}</Button>
                                        </div>
                                    </Grid>
                                ))}
                                    <Grid xs={12} item>
                                        <div className="question-container">
                                            <IconButton color="primary" onClick={this.handleBackClick}><ArrowBackIcon></ArrowBackIcon></IconButton>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </SwipeableViews>
                        {/*   Uncomment to see the fading in of questions after a brief delay..
                        <div>
                            <SuggestedQuestions title="Stumped? May we suggest..." questions={outsideQuestions} visible={questionsVisible[0].visible}></SuggestedQuestions>
                            <SuggestedQuestions title="Or how about..." questions={insideQuestions} visible={questionsVisible[1].visible}></SuggestedQuestions>
                        </div> */}
                    </div>

                </div>   
            </MuiThemeProvider>
        ); 
    }
}

export default withContext(Entry);