import React from 'react';
import { Button, MuiThemeProvider } from '@material-ui/core';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { darkTheme } from '../../themes';
import './subNavBar.scss';
import { withContext } from '../AppContextProvider';
import { teachingService } from '../../services/Teaching'

class SubNavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let currentPath = this.props.currentPath.pathname;
        let subNavOptions = this.props.subNavOptions;
        let selectedNavOption = null;
        subNavOptions.map(navOption => {
            navOption.selected = (currentPath.indexOf('/' + navOption.id) > -1);
            selectedNavOption = selectedNavOption || (navOption.selected ? navOption : null);
            return navOption;
        })
        if (!selectedNavOption){
            subNavOptions[0].selected = true;
            selectedNavOption = subNavOptions[0];
        }

        const selectedSermon = selectedNavOption.id === 'sermons' && this.props.context && this.props.context.selectedItem && this.props.context.selectedItem.type === 'SERMON' && this.props.context.selectedItem;

        return (
            <div className="sub-nav-bar">
            <MuiThemeProvider theme={darkTheme}>
                <div className="sub-var-bar-main">
                    { subNavOptions.map(navOption => 
                        <Button key={navOption.id} id={navOption.id} variant={navOption.selected ? 'contained' : 'text'} color="secondary" className="sub-nav-item" onClick={this.props.subNavChanged}>{navOption.label}</Button>
                    )}
                </div>
                {  selectedSermon && 
                    <div className="sub-nav-bar-breadcrumbs">
                        <div className="sub-var-bar-breadcrumb-item">{teachingService.getSeries(selectedSermon.seriesId).title}</div>
                        <div className="sub-var-bar-breadcrumb-item"><ArrowForwardIos></ArrowForwardIos> {selectedSermon.title}</div>
                    </div>
                }
            </MuiThemeProvider>
            </div>
        );
    }
}

export default withContext(SubNavBar);