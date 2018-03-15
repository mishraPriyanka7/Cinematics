import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    WebView,
    ScrollView,
    ActivityIndicator
  } from 'react-native';
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux';

  import ratingList from '../component/common/RateListJson';
  import SimilarMovies from '../component/common/SimilarMovies';
  import fetchMoviesData from '../actions/SimilarMoviesAction'


  class InfoDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            
            data: ratingList,
            isLoading: true,
            dataSource:[],
            similarMoviesList: [],      
        };
    }

    componentWillMount() {
         this.props.fetchMoviesData()
     }
 
     componentWillReceiveProps(nextProps) {
         if (nextProps.MovieListData != '' && nextProps.MovieListData != undefined) {
            this.setState({ similarMoviesList: nextProps.MovieListData.SimilarMoviesListData.results }) // this will update state to re-render ui
            //alert(JSON.stringify(nextProps.MovieListData.SimilarMoviesListData.results));
         }
        
    }

    componentDidMount() {
    
        return fetch('https://api.themoviedb.org/3/movie/2/similar?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson.results
              

            }, function() {
              // In this block you can do something with new state.
            });
           // alert(JSON.stringify(responseJson.results))
          })
          .catch((error) => {
            console.error(error);
          });

      }
      

    render(){

        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
      
        return(

            <View style={Styles.container}>
                <ScrollView>
                
                <View style={{flex:0.2,}}>

                    <FlatList
                        data={this.state.data}
                        horizontal={true}
                        renderItem={({item}) =>
                            <View>
                                <View style = {{flex:1, flexDirection:'column', margin:10,
                                        justifyContent:'center'}}>
                                        <View style={{justifyContent:'center'}}>
                                        <TouchableOpacity activeOpacity = { .5 }>
                                                <Image 
                                                    source={{uri: item.image}}
                                                    style={{width:40, height:40, borderRadius:35}}>
                                                </Image>

                                        </TouchableOpacity>
                                        </View>
                                            
                                        <View style = {{justifyContent:'center',alignItems:'center', marginTop:10}}>
                                                <Text style={{fontSize:15}}>{item.title}</Text>
                                        </View>
                                    
                                </View>
                            </View>
                        }
                    />

                    <View style={{height:1, backgroundColor:'#dddcdc', margin:10}}></View>
                </View>

                <View style={{flex:0.4, margin:10, marginTop:10}}>
                
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:15, marginTop:10}}>
                            An other-wordly story,
                            set against the backdrop of cold war era America circa 1962, 
                            where a mute janitor working at lab falls in love with an amphibious 
                            man begai held capital there and devises a plan to help him escape.
                        </Text>
                        <View style={{marginTop:10}}/>
                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Relase Date:</Text>
                            <Text style={Styles.textDetailsStyle}>December 22, 2017</Text>
                        </View>
                        
                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>DVD Relase Date:</Text>
                            <Text style={Styles.textDetailsStyle}>March 13,2018</Text>
                        </View>

                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Directed By:</Text>
                            <Text style={Styles.textDetailsStyle}>Guillermo del toro</Text>
                        </View>

                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Budget:</Text>
                            <Text style={Styles.textDetailsStyle}>$19,500,0000</Text>
                        </View>

                        <View style={Styles.textStyle}>
                            <Text style={Styles.textFontStyle}>Revenue:</Text>
                            <Text style={Styles.textDetailsStyle}>$127.458,683</Text>
                        </View>

                         <View style={{height:1, backgroundColor:'#dddcdc', margin:5}}></View>

                    </View>

                    <Text style={{fontSize:18, margin:5}}>Trailers</Text>
                    
                </View>

              
                <View style={{flex:0.3, marginTop:10,margin:10, flexDirection:'row'}}>

                    <View style={{marginRight:10}}>
                        <WebView
                                style={{height:130,width:150}}
                                javaScriptEnabled={true}
                                source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
                        />
                        <Text style={{marginTop:5}}> Official Trailer #1</Text>
                    </View>

                    <View style={{marginLeft:10}}>
                        <WebView
                            style={{height:130,width:150}}
                            javaScriptEnabled={true}
                            source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
                        />
                        <Text style={{marginTop:5}}> Red Band Trailer</Text>
                    </View> 

                </View>

                <View style={{flex:0.4,margin:10,}}>
                    
                    <View style={{height:1, backgroundColor:'#dddcdc'}}></View>
                    
                    <View style={{flex:0.2, flexDirection:'row', marginTop:10}}>
                        <Text style={{ alignItems:'flex-start', justifyContent:'flex-start',fontSize:16, margin:5}}>
                            More from Guillermo del Toro
                        </Text>
                        <View style={{flex:1, alignItems:'center', justifyContent:'flex-end'}}>
                        <Text style={{ fontSize:16,margin:5, color:'green'}}>
                            View All
                        </Text>
                        </View>
                    </View>   

                    <View style={{flex:0.8, flexDirection:'row', marginTop:10}}>
                           <FlatList
    
                                data={ this.state.dataSource }
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
                
                <View> 
                    <SimilarMovies moviesData={this.state.similarMoviesList} />
               </View>
                                
            </ScrollView>
            </View>
        );
    }
  }


  const Styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    textStyle: {
        flexDirection:'row', 
        marginTop:10
    },
    textFontStyle:{
        fontSize:15, 
        color:'black'
    },
    textDetailsStyle:{
        marginLeft:10
    },
  });



function mapStateToProps(state) {
    return {
        MovieListData: state.MovieListData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMoviesData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoDetails);