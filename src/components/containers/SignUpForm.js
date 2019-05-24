import { connect } from 'react-redux'
import { registerUser } from '../../actions'
import SignUpForm from '../views/jsx/SignUpForm'

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