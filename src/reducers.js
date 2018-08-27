import { ABOUT_FETCH_REPOS_RECEIVE_RESPONSE } from './about/AboutActionType';

export const initialState = {
    title: 'initial title',
    repos: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_TITLE':
        return { ...state, title: action.title };
    case ABOUT_FETCH_REPOS_RECEIVE_RESPONSE:
        return { ...state, repos: action.repos };
    default:
        return { ...state };
    }
};
