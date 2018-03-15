import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import InfoDetails from '../src/component/InfoDetails';
import TabViewDetails from '../src/component/TabViewDetails';

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
                    key="TabViewDetails"
                    component={TabViewDetails}
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