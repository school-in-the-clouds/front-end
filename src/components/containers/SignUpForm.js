import { connect } from 'react-redux'
import { registerUser } from '../../actions'
import SignUpForm from '../presentational/SignUpForm'

function mapStateToProps(state) {
    return state.auth
}

function mapDispatchToProps() {
    return {
        registerUser
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps()
)(SignUpForm)