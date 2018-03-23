import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';


export default class SimilarMovies extends Component {

    constructor(props){
        super(props);

        this.state={
         movieList: [],
        };

    }

    componentWillMount() {
       this.setState({movieList:this.props.similarMovieData});
       alert("similar movies data : **  "+JSON.stringify(this.props.similarMovieData))
    }

    
    render(){
        return (

            <View style={{flex:1, margin:0}}>
                    
             <View style={{marginTop:5}}>
                    
                    <FlatList
                            data={ this.state.movieList }
                            horizontal={true}
                            renderItem={({item}) => 
                            <View>
                            <View style = {{flex:1, flexDirection:'column', margin:2,
                                    justifyContent:'center'}}>
                                    <View style={{justifyContent:'center'}}>
                                    <TouchableOpacity activeOpacity = { .5 }>
                                            <Image 
                                                source={{uri: "http://image.tmdb.org/t/p/w185"+item.backdrop_path}}
                                                style={{width:130, height:130, margin:2}}>
                                            </Image>

                                    </TouchableOpacity>
                                    </View>
                                        
                                    <View style = {{justifyContent:'center',alignItems:'center', marginTop:10}}>
                                            <Text style={{fontSize:15}}>{item.title}</Text>
                                            <Text style={{fontSize:13}}>{item.popularity}</Text>
                                    </View>
                                
                            </View>
                            </View>
                            
                            }
                        />
                </View>

        
            </View>
        )
    }   
}