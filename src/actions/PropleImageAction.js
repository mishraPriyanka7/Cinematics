import { FETCHING_PEOPLE_IMAGE_LIST, FETCHING_PEOPLE_IMAGE_SUCCESS, FETCHING_PEOPLE_IMAGE_FAILURE } from '../utils/constants'

export default function fetchPeopleImageData() {

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/person/74568/images?api_key=1b31282aebdebc34884006adfac40bfb")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}

function getLisData() {
    return {
        type: FETCHING_PEOPLE_IMAGE_LIST
    }
}

function getListDataSuccess(data) {
    return {
        type: FETCHING_PEOPLE_IMAGE_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_PEOPLE_IMAGE_FAILURE,

    }
}