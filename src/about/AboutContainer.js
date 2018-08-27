import { connect } from 'react-redux';
import AboutComponent from './AboutComponent';
import { fetchGithubRepos } from './AboutAction';

const mapStateToProps = state => ({
    title: state.title,
    repos: state.repos,
});

const mapDispatchToProps = dispatch => ({
    fetchRepos: () => dispatch(fetchGithubRepos()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AboutComponent);
