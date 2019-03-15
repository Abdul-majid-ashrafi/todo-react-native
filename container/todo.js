import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import TodoComponent from '../components/todo';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            time: null,
            color: 'blue'
        };
    }

    submitTodo = () => {
        if (this.state.text.trim() === '') {
            return;
        }
        this.props.add(this.state);
        this.setState({ text: "", color: "blue" });
    }

    inputChangeHandler = (value) => {
        this.setState({
            text: value
        });
    }

    colorHandler = (color) => {
        this.setState({ color })
    }

    dateHandler = (time) => {
        this.setState({ time })
    }

    render() {
        return <TodoComponent _colorHandler={this.colorHandler} _inputChangeHandler={this.inputChangeHandler} _submitTodo={this.submitTodo} _state={this.state} _dateHandler={this.dateHandler} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoContainer);