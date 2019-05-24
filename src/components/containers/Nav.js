import { connect } from 'react-redux'
import Nav from '../presentational/Nav'

function mapStateToProps(state) {
    return state.auth
}

export default connect(
    mapStateToProps, 
    {}
)(Nav)

