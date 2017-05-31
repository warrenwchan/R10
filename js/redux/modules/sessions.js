import { firebaseUrl } from '../../configs/api';
import { formatSessionData } from './../../lib/dataFormatHelpers';

// ACTIONS
const GET_SESSIONS_LOADING = 'GET_SESSIONS_LOADING';
const GET_SESSIONS_ERROR = 'GET_SESSIONS_ERROR';
const GET_SESSIONS = 'GET_SESSIONS';

// ACTION CREATORS
const getsessionsLoading = () => ({ type: GET_SESSIONS_LOADING });
const getsessionsError = (error) => ({ type: GET_SESSIONS_ERROR, payload: error });
const getsessions = (codes) => ({ type: GET_SESSIONS, payload: codes })

export const _fetchsessions = () => (dispatch) => {
    dispatch(getsessionsLoading());

    return fetch(`${firebaseUrl}/sessions.json`)
        .then(response => response.json())
        .then(sessions => dispatch(getsessions(sessions)))
        .catch(error => dispatch(getsessionsError(error)))
};

// REDUCER
export default function reducer( state = {
    isLoading: false,
    sessionsData: {
        dataBlob: {},
        sectionIds: [],
        rowIds: []
    }
}, action ) {
    switch (action.type) {
        case GET_SESSIONS_LOADING: {
            return Object.assign({}, state, {
                isLoading: true,
                error: ''
            })
        }
        case GET_SESSIONS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload
            })
        }
        case GET_SESSIONS: {
            const formattedData = formatSessionData( action.payload );
            return Object.assign({}, state, {
                isLoading: false,
                error: '',
                sessionsData: formattedData
            })
        }
        default: {
            return state;
        }
    }
};
