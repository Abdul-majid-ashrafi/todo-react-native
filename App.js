import React, { Component } from 'react';
import createRootNavigator from './config/router';
import { connect } from 'react-redux';
import configureStore from './store';


class App extends Component {
    state = {
        isLoggedIn: false
    }

    componentWillMount() {
        const { persistor } = configureStore();
        if (!this.props.authReducer.isLoggedIn) {
            persistor.purge().then(() => {
                console.log("Success")
            }).catch(error => {
                console.log("Got an Errorr  ", error)
            })
        }
    }

    render() {
        let isLoggedIn = false;
        isLoggedIn = this.props.authReducer.isLoggedIn;
        const Layout = createRootNavigator(isLoggedIn);
        return <Layout />;
    }
}



const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps, null)(App);