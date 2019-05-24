import LoginForm from '../presentational/LoginForm'
import { loginUser } from '../../actions'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return state.auth
}

function mapDispatchToProps() {
    return { 
        loginUser 
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps()
)(LoginForm)