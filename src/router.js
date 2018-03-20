import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import InfoDetails from '../src/component/InfoDetails';
import TabViewDetails from '../src/component/TabViewDetails';
import PeopleDetails from '../src/component/PeopleDetails';
import ReviewList from '../src/component/ReviewsList';
import TabViewPeople from '../src/component/TabViewPeople';

class RouterComponent extends Component{
    render(){
        return(
            <Router>
 
                <Stack key='root'>
                    <Scene 
                    key="TabViewDetails"
                    component={TabViewDetails}
                    hideNavBar={true}
        
                    />

                
                    <Scene 
                    key="TabViewPeople"
                    component={TabViewPeople}
                    title="People Details"
                    />

                </Stack>
            </Router>
        );
    }
}


export default RouterComponent;