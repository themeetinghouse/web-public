import React from 'react';
import { withRouter } from 'react-router-dom'
import './homeTeachingSeries.scss';
import { PageContentSkeleton } from '../../../components/PageContentSkeleton/PageContentSkeleton';
import { AppContext, withContext } from '../../../components/AppContextProvider';
import { Button } from '@material-ui/core';

export class HomeTeachingSeries extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <div className="page-home-teaching-series">
                    <PageContentSkeleton title="Series" layout={2}></PageContentSkeleton>
                </div>
            </div>
            
        )
    }
}

//export default withRouter(HomeTeachingSeries);
export default withContext(HomeTeachingSeries);