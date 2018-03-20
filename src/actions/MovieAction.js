import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE,FETCHING_MOVIE_DETAILS,FETCHING_MOVIE_DETAILS_SUCCESS,FETCHING_MOVIE_DETAILS_FAILURE } from '../utils/constants'

export default function fetchMovieData() {

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/list/1?language=en-US&api_key=1b31282aebdebc34884006adfac40bfb")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json.items)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}


export function fetchMovieDetails(movieID) {
    console.log("fetchMovieDetails >>> "+movieID);
    return (dispatch) => {
        dispatch(getMovieData())
        fetch("https://api.themoviedb.org/3/movie/"+movieID+"?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(response => response.json())
            .then(responseJson => {
                dispatch(getMovieDataSuccess(responseJson))
            })
            .catch(err => dispatch(getMovieDataFailure(err)))
//dispatch(getMovieDataSuccess(json.data._55))
    }
}

// export function fetchMovieDetails(movieID){
//     return fetch('https://api.themoviedb.org/3/movie/"+movieID+"?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         return dispatch(getMovieDataSuccess(responseJson));
//       })
//       .catch((error) => {
//         console.error(error);
//         return dispatch(getMovieDataFailure(err));
//       });
//   }



function getLisData() {
    return {
        type: FETCHING_LIST
    }
}

function getMovieData() {
    return {
        type: FETCHING_MOVIE_DETAILS
    }
}

function getListDataSuccess(data) {
    return {
        type: FETCHING_LIST_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_LIST_FAILURE,

    }
}

function getMovieDataSuccess(data) {
 // console.log("getMovieDataSuccess >>>>>",data);
    return {
        type: FETCHING_MOVIE_DETAILS_SUCCESS,
        data
    }
}

function getMovieDataFailure() {
    return {
        type: FETCHING_MOVIE_DETAILS_FAILURE,

    }
}