import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE } from '../utils/constants'

export default function fetchMovieData() {

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/movie/2/similar?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json)))
            .catch(err => dispatch(getListDataFailure(err)))

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