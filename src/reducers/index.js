import { combineReducers } from 'redux'
import SimilarMoviesListReducer from './SimilarMoviesListReducer'
import MovieListReducer from './MovieListReducer'
import MovieDetailReducer from './MovieDetailReducer'
import CastListReducer from './CastListReducer'

const rootReducer = combineReducers({
        MovieListData: MovieListReducer,
        MovieDetails: MovieDetailReducer,
        SimilarMovieListData: SimilarMoviesListReducer,
        CastListData: CastListReducer,
})

export default rootReducer;