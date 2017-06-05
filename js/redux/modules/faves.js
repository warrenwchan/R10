import { firebaseUrl } from '../../configs/api';
import { formatFavesData } from './../../lib/dataFormatHelpers';

// ACTIONS
const GET_FAVES_LOADING = 'GET_Faves_LOADING';
const GET_FAVES_ERROR = 'GET_Faves_ERROR';
const GET_FAVES = 'GET_Faves';

// ACTION CREATORS
const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFavesError = (error) => ({ type: GET_FAVES_ERROR, payload: error });
const getFaves = (codes) => ({ type: GET_FAVES, payload: codes })

export const _fetchFaves = () => (dispatch) => {
    dispatch(getFavesLoading());

    return fetch(`${firebaseUrl}/sessions.json`)
        .then(response => response.json())
        .then(Faves => dispatch(getFaves(Faves)))
        .catch(error => dispatch(getFavesError(error)))
};

// REDUCER
export default function reducer( state = {
    isLoading: false,
    favesData: {
        dataBlob: {},
        sectionIds: [],
        rowIds: []
    }
}, action ) {
    switch (action.type) {
        case GET_FAVES_LOADING: {
            return Object.assign({}, state, {
                isLoading: true,
                error: ''
            })
        }
        case GET_FAVES_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload
            })
        }
        case GET_FAVES: {
            const formattedData = formatFavesData( action.payload );
            return Object.assign({}, state, {
                isLoading: false,
                error: '',
                favesData: formattedData
            })
        }
        default: {
            return state;
        }
    }
}
