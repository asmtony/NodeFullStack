import {FETCH_USER} from '../actions/types'

export default function( state = null, action){
    console.log('action: ' + JSON.stringify(action));
    switch  (action.action){
        case FETCH_USER:
                console.log('action.payload: ' + JSON.stringify(action.payload));
            return action.payload || false;
    default:
        return state;
    } 
}
