import React, { Component } from 'react';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import LoginComponent from '../components/login';

class LoginContainer extends Component {
   
    state = {
        text: ''
    }

    login = () => {
        if (this.state.text.trim() === '') {
            return;
        } else {
            this.props.login(this.state.text);
            this.setState({ text: "" });
        }
    }

    inputChangeHandler = (value) => {
        this.setState({
            text: value
        });
    }

    render() {
        return <LoginComponent _inputChangeHandler={this.inputChangeHandler} _login={this.login} _state={this.state} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (name) => {
            dispatch(login(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer);