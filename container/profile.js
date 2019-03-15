import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/auth';
import ProfileComponent from '../components/profile';

class ProfileContainer extends Component {
    state = {
        name: ""
    }

    componentWillMount() {
        const userName = (this.props.authReducer) ? this.props.authReducer.user : "";
        this.setState({ name: userName })
    }

    logout = () => {
        this.props.logout()
    }

    render() {
        return <ProfileComponent _state={this.state} _logout={this.logout} />;
    }
}

const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logOut())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);