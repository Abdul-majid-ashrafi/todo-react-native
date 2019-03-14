import React, { Component } from 'react';
import { Container, Header, Title, Button, Right, Body, Text } from "native-base";
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../actions/auth';

class ProfileComponent extends Component {
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
        return (
            <Container>
                <Header span style={styles.header}>
                    <Body>
                        <Title>Hello {this.state.name}</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.bottom}>
                    <Button bordered danger block onPress={this.logout}>
                        <Text>Logout</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#24D330",
        color: "#FFF",
        fontWeight: 'bold',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20
    }
})



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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
// export default ProfileComponent;