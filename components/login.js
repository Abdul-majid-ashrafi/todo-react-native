import React from 'react';
import { Container, Button, Text, Item, Input } from 'native-base';
import { StyleSheet, View, Image } from 'react-native';

const LoginComponent = (props) => {
    return (
        <Container style={styles.header}>
            <View style={styles.img}>
                <Image source={require('../assets/logo.jpeg')} />
            </View>
            <View style={styles.bottom}>
                <Item style={styles.inputContainer}>
                    <Input placeholder="Enter your name" value={props._state.text}
                        onChangeText={props._inputChangeHandler} style={styles.input} />
                </Item>
                <Button block onPress={props._login} style={styles.btn}>
                    <Text>Login</Text>
                </Button>
            </View>
        </Container>
    )
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
    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        // height: 70
    }
});

export default LoginComponent;