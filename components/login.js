import React, { Component } from 'react';
import { Container, Button, Text, Item, Input } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

class LoginComponent extends Component {
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
        return (
            <Container style={styles.header}>
                <View style={styles.bottom}>

                    <Item style={styles.inputContainer}>
                        <Input placeholder="Enter your name" value={this.state.text}
                            onChangeText={this.inputChangeHandler} style={styles.input} />
                    </Item>

                    <Button block onPress={this.login} style={styles.btn}>
                        <Text>Login</Text>
                    </Button>
                </View>
                {/* <Content>
                </Content> */}
                {/* <Form>
                    <Item style={styles.inputContainer}>
                        <Input placeholder="Name" value={this.state.text}
                            onChangeText={this.inputChangeHandler} />
                    </Item>
                </Form>
                <Footer>
                    <FooterTab>
                        <Button onPress={this.login} style={styles.btn}>
                            <Text style={styles.btn}>Go Login</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
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
    },
    inputContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        // height: 70
    },
    input: {
        // height: 70,
        // backgroundColor: '#ffffff',
        // paddingLeft: 15,
        // paddingRight: 15
    },
    todoButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        login: (name) => {
            dispatch(login(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent);