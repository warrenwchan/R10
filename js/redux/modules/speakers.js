import { firebaseUrl } from '../../configs/api';
import { formatSpeakerInfo } from './../../lib/dataFormatHelpers';

// ACTIONS
const GET_SPEAKERS_LOADING = 'GET_SPEAKERS_LOADING';
const GET_SPEAKERS_ERROR = 'GET_SPEAKERS_ERROR';
const GET_SPEAKERS = 'GET_SPEAKERS';

// ACTION CREATORS
const getSpeakersLoading = () => ({ type: GET_SPEAKERS_LOADING });
const getSpeakersError = (error) => ({ type: GET_SPEAKERS_ERROR, payload: error });
const getSpeakers = (speakerInfo) => ({ type: GET_SPEAKERS, payload: speakerInfo })

export const _fetchSpeakers = ( speakerId ) => (dispatch) => {
    dispatch(getSpeakersLoading());

    return fetch(`${firebaseUrl}/speakers.json?orderBy="speaker_Id"&equalTo="${speakerId}"`)
        .then(response => response.json())
        .then(speakerInfo => dispatch(getSpeakers(speakerInfo)))
        .catch(error => dispatch(getSpeakersError(error)))
};

// REDUCER
export default function reducer( state = {
    isLoading: false,
    speakersInfo: {}
}, action ) {
    switch (action.type) {
        case GET_SPEAKERS_LOADING: {
            return Object.assign({}, state, {
                isLoading: true,
                error: ''
            })
        }
        case GET_SPEAKERS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload
            })
        }
        case GET_SPEAKERS: {
            const formattedSpeakerInfo = formatSpeakerInfo( action.payload )
            return Object.assign({}, state, {
                isLoading: false,
                error: '',
                speakersInfo: formattedSpeakerInfo
            })
        }
        default: {
            return state;
        }
    }
}
