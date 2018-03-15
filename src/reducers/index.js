import { combineReducers } from 'redux'
import SimilarMoviesListReducer from './SimilarMoviesListReducer'
import CastListReducer from './CastListReducer'

const rootReducer = combineReducers({
        MovieListData: SimilarMoviesListReducer,
        CastListData: CastListReducer,
})

export default rootReducer;