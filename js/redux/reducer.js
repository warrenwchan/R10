import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from './modules/conduct';
import SessionReducer from './modules/sessions';

export default combineReducers({
    navigation: NavigationReducer,
    conduct: ConductReducer,
    sessions: SessionReducer
})
