import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Input } from 'native-base';
import { StyleSheet } from 'react-native';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

class LoginComponent extends Component {
    state = {
        text: ''
    }

    login = () => {
        if (this.state.text.trim() === '') {
            return;
        }
        this.props.login(this.state.text);
        this.setState({ text: "" });
    }

    inputChangeHandler = (value) => {
        this.setState({
            text: value
        });
    }
    render() {
        return (
            <Container style={styles.header}>
                <Content>
                </Content>
                <Form>
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
                </Footer>
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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        width: '70%'
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