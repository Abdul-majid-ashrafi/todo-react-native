import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import { Container, Header, Title, Right, Body, Textarea, Content, DatePicker } from "native-base";

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            time: new Date(),
            color: 'blue'
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ time: newDate });
    }

    submitTodo = () => {
        if (this.state.text.trim() === '') {
            return;
        }
        this.props.add(this.state);
        console.log("NEW TODO ", this.state)
        this.setState({ text: "", color: "blue", time: new Date() });
    }

    inputChangeHandler = (value) => {
        this.setState({
            text: value
        });
    }
    render() {
        return (
            <Container>
                <Header span style={styles.header}>
                    <Body>
                        <Title>Add</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Textarea rowSpan={2} bordered
                        placeholder="When do you need to do?"
                        value={this.state.text}
                        onChangeText={this.inputChangeHandler}
                    />
                    <View style={styles.dateContainer}>
                        <DatePicker
                            // defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="What is it due?"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        {/* <Text>
                        Date: {this.state.time.toString().substr(4, 12)}
                    </Text> */}
                    </View>
                    <Button title='Add' full success
                        onPress={this.submitTodo}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        backgroundColor: "#24D330",
        color: "#FFF",
        fontWeight: 'bold',
    },
    dateContainer: {
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        // border: '2px solid black'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        add: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoComponent);