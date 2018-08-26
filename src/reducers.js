export const initialState = {
    title: 'initial title',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_TITLE':
        return { ...state, title: action.title };
    default:
        return { ...state };
    }
};
