import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todo';
import ListItemComponent from '../components/ListItem';

class ListItemContainer extends Component {

	state = {
		todoList: []
	}

	componentDidMount() {
		this.setState({ todoList: this.props.todoList });
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			todoList: nextProps.todoList,
		};
	}

	removeHandler = (index) => {
		this.state.todoList.splice(index, 1)
		this.props.deleteTodo(this.state.todoList);
	}

	render() {
		return <ListItemComponent _todoList={this.state.todoList} _removeHandler={this.removeHandler} />
	}
}


const mapStateToProps = state => {
	return {
		todoList: state.todoList.todoList
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteTodo: (todos) => {
			dispatch(deleteTodo(todos))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItemContainer);