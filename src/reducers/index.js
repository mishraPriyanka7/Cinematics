import { combineReducers } from 'redux'
import SimilarMoviesListReducer from './SimilarMoviesListReducer'
import MovieListReducer from './MovieListReducer'
import MovieDetailReducer from './MovieDetailReducer'
import CastListReducer from './CastListReducer'
import PeopleImageReducer from './PeopleImageReducer'

const rootReducer = combineReducers({
        MovieListData: MovieListReducer,
        MovieDetails: MovieDetailReducer,
        SimilarMovieListData: SimilarMoviesListReducer,
        CastListData: CastListReducer,
        PeopleImageData: PeopleImageReducer,
})

export default rootReducer;