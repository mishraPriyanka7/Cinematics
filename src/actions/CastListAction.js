import { FETCHING_CAST_LIST, FETCHING_CAST_LIST_SUCCESS, FETCHING_CAST_LIST_FAILURE } from '../utils/constants'

export default function fetchMovieData() {

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/person/2?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}

function getLisData() {
    return {
        type: FETCHING_CAST_LIST
    }
}

function getListDataSuccess(data) {
    return {
        type: FETCHING_CAST_LIST_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_CAST_LIST_FAILURE,

    }
}