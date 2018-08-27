import { ABOUT_FETCH_REPOS_SEND_REQUEST, ABOUT_FETCH_REPOS_RECEIVE_RESPONSE } from './AboutActionType';

export const aboutFetchReposSendRequest = () => ({
    type: ABOUT_FETCH_REPOS_SEND_REQUEST,
});

export const aboutFetchReposReceiveResponse = (repos) => ({
    type: ABOUT_FETCH_REPOS_RECEIVE_RESPONSE,
    repos
});

export const fetchGithubRepos = () => (dispatch) => {
    dispatch(aboutFetchReposSendRequest());

    return fetch('https://api.github.com/users/jedrzejczak/repos')
        .then(response => response.json())
        .then(data => dispatch(aboutFetchReposReceiveResponse(data)));
};