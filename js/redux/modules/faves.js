import { firebaseUrl } from '../../configs/api';
import { formatFavesData } from './../../lib/dataFormatHelpers';
import { queryFaves } from './../../configs/models';

// ACTIONS
const GET_FAVES_LOADING = 'GET_Faves_LOADING';
const GET_FAVES_ERROR = 'GET_Faves_ERROR';
const GET_FAVES = 'GET_Faves';

// ACTION CREATORS
const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFavesError = (error) => ({ type: GET_FAVES_ERROR, payload: error });
const getFaves = (favedSessions, faveIds) => ({ type: GET_FAVES, payload:{favedSessions: favedSessions, faveIds: faveIds}  })

export const _fetchFaves = () => (dispatch) => {
    const faveIds = queryFaves();
    dispatch(getFavesLoading());

    return fetch(`${firebaseUrl}/sessions.json`)
        .then(response => response.json())
        .then( sessions => sessions.filter( session => {
            if( faveIds.includes(session.session_id)){
                return session
            }
        }))
        .then(filteredSessions => dispatch(getFaves(filteredSessions, faveIds)))
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
            const formattedData = formatFavesData( action.payload.favedSessions );
            console.log(action.payload, 'favsReducer')
            return Object.assign({}, state, {
                isLoading: false,
                error: '',
                favesData: formattedData,
                faveIds: action.payload.faveIds
            })
        }
        default: {
            return state;
        }
    }
}
