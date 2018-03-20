import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet
  } from 'react-native';


  export default class MoviesListPeople extends Component {

    constructor(props){
        super(props);

        this.state={
            tvShowsList: [],      
        };
    }
 

   componentDidMount() {
    
    return fetch('https://api.themoviedb.org/3/person/74568/movie_credits?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          tvShowsList: responseJson.cast
          
        }, function() {
          
        });
       // alert(JSON.stringify(responseJson.results))
      })
      .catch((error) => {
        console.error(error);
      });

  }

    render(){
        return(
            <View style={Styles.mainContainer}>
            
                <FlatList
                            data={ this.state.tvShowsList }
                            renderItem={({item}) => 

                            <View style={{flex:1}}>
                                <View style={{margin:10, flexDirection:'row'}}>
                            
                                    
                                        <View style={{margin:5, flex:0.3, height:140}}>
                                            <Image 
                                                source={{uri: "http://image.tmdb.org/t/p/w185"+item.poster_path}}
                                                style={{ margin:3, width:110, height:150,}}/>
                                            </View>

                                        <View style={{flex:0.7, flexDirection:'column',
                                              margin:5, marginLeft:20, height:140, marginTop:20}}>

                                            <View style = {{marginLeft:5, flexDirection:'row'}}>
                                                <View style={{alignItems:'flex-start'}}>
                                                    <Text style={{fontSize:15}}>{item.release_date}</Text>
                                                </View>

                                                <View style={{alignItems:'flex-end', marginLeft:10}}>
                                                    <Text style={{fontSize:15}}> {item.character} </Text>
                                                </View>
                                                
                                            </View>

                                            <View style={{marginLeft:5, }}>
                                                <Text style={{fontSize:15,color:'black'}}>{item.title}</Text>
                                            </View>
                                            
                                            <View style={{marginTop:55}}>
                                                <Image 
                                                    source={{uri: "http://image.tmdb.org/t/p/w185"+item.backdrop_path}}
                                                    style={{width:50, height:40, marginLeft:5}}/>
                                            </View>
                                            
                                        </View>
                                
                                </View>

                                <View style={{height:1, backgroundColor:'#dddcdc', marginLeft:8, marginRight:8 }}></View>
                            </View>

                       
                            }
                        />

                         
            </View>
        )
            
        
    }

}


const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        
    },
  });
