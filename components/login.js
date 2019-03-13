import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

// this.props.navigation.push('Todo') // for stack
// this.props.navigation.navigate("Todo")// for tab
class LoginComponent extends Component {
    render() {
        return (
            <Container style={styles.header}>
                <Content>
                    <Text>This is login page</Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.props.navigation.navigate("Todo")}>
                            <Text>Go Login</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "transparent",
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




export default LoginComponent;


