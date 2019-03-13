import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';

class TodoComponent extends Component {

    state = {
        text: ''
    }

    submitTodo = () => {
        if (this.state.text.trim() === '') {
            return;
        }
        this.props.add(this.state.text);
        // this.setState({ text: "" });
    }

    inputChangeHandler = (value) => {
        this.setState({
            text: value
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Add Todo"
                        style={styles.input}
                        value={this.state.text}
                        onChangeText={this.inputChangeHandler}
                    ></TextInput>
                    <Button title='Add'
                        style={styles.todoButton}
                        onPress={this.submitTodo}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        add: (name) => {
            dispatch(addTodo(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoComponent);