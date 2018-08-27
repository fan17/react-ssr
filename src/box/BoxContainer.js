import { connect } from 'react-redux';
import BoxComponent from './BoxComponent';

const mapStateToProps = state => ({
    title: state.title,
});

const mapDispatchToProps = dispatch => ({
    changeTitle: newTitle => dispatch({ type: 'CHANGE_TITLE', title: newTitle }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoxComponent);
