import { combineReducers } from 'redux'
import SimilarMoviesListReducer from './SimilarMoviesListReducer'
import CastListReducer from './CastListReducer'
import PeopleImageReducer from './PeopleImageReducer'

const rootReducer = combineReducers({
        MovieListData: SimilarMoviesListReducer,
        CastListData: CastListReducer,
        PeopleImageData: PeopleImageReducer,
})

export default rootReducer;