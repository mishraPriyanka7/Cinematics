import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE, 
    FETCHING_MOVIE_DATA, FETCHING_MOVIE_DATA_SUCCESS, FETCHING_MOVIE_DATA_FAILURE} from '../utils/constants'

export default function fetchMovieData(similarMovieId) {

    return (dispatch) => {
        dispatch(getLisData())
        //alert("similar movie actions "+ similarMovieId);
        fetch("https://api.themoviedb.org/3/movie/"+similarMovieId+"/similar?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}

export  function fetchMovieDetails(movieId) {

    return (dispatch) => {
        dispatch(getMoviesData())
        //alert("similar movie actions "+ similarMovieId);
        fetch("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
        .then(response => response.json())
        .then(responseJson => { dispatch(getMoviesDataSuccess(responseJson)) })
        .catch(err => dispatch(getMoviesDataFailure(err)))   
    }
}

function getLisData() {
    return {
        type: FETCHING_LIST
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

function getMoviesData() {
    return {
        type: FETCHING_MOVIE_DATA
    }
}

function getMoviesDataSuccess(data) {
    return {
        type: FETCHING_MOVIE_DATA_SUCCESS,
        data
    }
}

function getMoviesDataFailure() {
    return {
        type: FETCHING_MOVIE_DATA_FAILURE,

    }
}