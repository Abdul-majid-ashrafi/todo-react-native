import React from 'react';
import { Container, Header, Title, Button, Right, Body, Text } from "native-base";
import { StyleSheet, View } from 'react-native';

const ProfileComponent = (props) => {
    return (
        <Container>
            <Header span style={styles.header}>
                <Body>
                    <Title>Hello {props._state.name}</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.bottom}>
                <Button bordered danger block onPress={props._logout}>
                    <Text>Logout</Text>
                </Button>
            </View>
        </Container>
    );
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

export default ProfileComponent;