import React, { Component } from 'react';
import createRootNavigator from './config/router';
import { connect } from 'react-redux';
// import configureStore from './store';


class App extends Component {
    state = {
        isLoggedIn: false
    }

    componentWillMount() {
        // console.log(this.props.authReducer)
    }


    render() {
        let isLoggedIn = false;
        isLoggedIn = this.props.authReducer.isLoggedIn;
        // console.log(this.state)

        // this.setState({ isLoggedIn: this.props.authReducer.isLoggedIn })
        // const { persistor } = configureStore();
        // if (!this.state.isLoggedIn) {
        // persistor.purge().then((response) => {
        //     console.log("XXXXXX ", response)
        // }).catch(error => {
        //     console.log("XEEXXXXXEEEEEE ", error)
        // })
        // }
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