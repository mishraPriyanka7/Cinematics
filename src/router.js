import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import InfoDetails from '../src/component/InfoDetails';
import TabViewDetails from '../src/component/TabViewDetails';
import MovieDetailsHeader from '../src/component/MovieDetailsHeader';

class RouterComponent extends Component{
    render(){
        return(
            <Router
                navigationBarStyle={{ backgroundColor: '#44237c' }}
                titleStyle={{
                color: 'white',}}
                navBarButtonColor={{ color: 'white' }}>
 
                <Stack key='root'>
                    <Scene 
                    key="MovieDetailsHeader"
                    component={MovieDetailsHeader}
                    renderLeftButton={<View />}
                    />

                </Stack>
            </Router>
        );
    }
}
const style = StyleSheet.create({
    navBar:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    navTitle:{
        color:'white'
    }
});

export default RouterComponent;