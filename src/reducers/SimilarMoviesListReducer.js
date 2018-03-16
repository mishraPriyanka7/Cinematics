import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE } from '../utils/constants'

const initialState = {
    SimilarMoviesListData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function SimilarMoviesListReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_LIST:
            return {
                ...state,
                isFetchingList: true,
                SimilarMoviesListData: []
            }

        case FETCHING_LIST_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                SimilarMoviesListData: action.data
            }

        case FETCHING_LIST_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}