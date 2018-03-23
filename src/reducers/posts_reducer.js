import { FETCH_POSTS, FETCH_POST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')
        case FETCH_POST:
            const post = action.payload.data;
            const newState = { ...state }
            console.log(newState)
            newState[post.id] = post
            console.log(newState[post.id])
            return newState
        default:
            return state
    }
}