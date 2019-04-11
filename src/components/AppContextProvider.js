import React from 'react';

export const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: null,
            selectedItemId: "123",
            selectedItemType: null,
            selectedItem: null,
            updateContext: this.updateContext.bind(this)       
        }
    }

    updateContext(contextKey, contextValue){
        this.setState({[contextKey]: contextValue});
    }

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export function withContext(Component) {
	return function contextComponent(props) {
		return (
			<AppContext.Consumer>
				{context => <Component {...props} context={context} />}
			</AppContext.Consumer>
		)
	}
}