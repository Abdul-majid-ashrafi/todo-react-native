import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';


class ProfileComponent extends Component {
    render() {
        return (
            <Container>
                <Button>
                    <Text>Profile</Text>
                </Button>
            </Container>
        );
    }
}

export default ProfileComponent;