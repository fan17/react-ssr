import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => ({
    title: state.title,
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeComponent);
