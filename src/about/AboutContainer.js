import { connect } from 'react-redux';
import AboutComponent from './AboutComponent';

const mapStateToProps = state => ({
    title: state.title,
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AboutComponent);
