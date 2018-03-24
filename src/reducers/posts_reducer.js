import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
    console.log(state,"stan główny")
    switch (action.type) {
        case DELETE_POST:
            console.log(state,"usuwanie")
            return _.omit(state, action.payload)
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')
        case FETCH_POST:
            const post = action.payload.data;
            const newState = { ...state }
            newState[post.id] = post
            return newState
        default:
            return state
    }
}