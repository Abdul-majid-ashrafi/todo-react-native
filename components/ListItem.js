import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Container, Header, Title, Right, Body, List, ListItem, Left } from "native-base";
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todo';


class ListItemComponent extends Component {

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
		return (
			<Container>
				<Header span style={styles.header}>
					<Body>
						<Title>Todo</Title>
					</Body>
					<Right />
				</Header>

				{this.state.todoList.map((value, index) => {
					return (
						<List key={index}>
							<Swipeout autoClose={true} right={[{
								text: 'Delete',
								backgroundColor: '#ff0000',
								onPress: () => {
									Alert.alert(
										'Alert',
										'Are you sure want to delete ?',
										[
											{ text: 'Cancel', style: 'cancel' },
											{ text: 'OK', onPress: this.removeHandler.bind(this, index) },
										],
										{ cancelable: true },
									);
								}
							}]}
								style={{ backgroundColor: 'transparent' }}>
								<ListItem avatar>
									<Left>
										<Text style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: value.color }}></Text>
									</Left>
									<Body>
										<Text>{value.value}</Text>
									</Body>
									<Right>
										<Text note>{value.time}</Text>
										{/* <Text note>3:43 pm</Text> */}
									</Right>
								</ListItem>
							</Swipeout>
						</List>
					)
				})}
				{/* <FlatList style={styles.listContainer}
					data={this.props.todoList}
					keyExtractor={(item, index) => index.toString()}
					renderItem={info => (
						<Swipeout right={swipeoutBtns} onOpen={this.onOpen.bind(this, info)} onClose={this.onClose.bind(this, info)}>
							<TouchableOpacity>
								<View style={styles.listItem}>
									<Text>{info.item.value}</Text>
								</View>
							</TouchableOpacity>
						</Swipeout>
					)}
				/> */}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#f1f9f9',
	}, header: {
		backgroundColor: "#24D330",
		color: "#FFF",
		fontWeight: 'bold',
	}, circle: {
		width: 44,
		height: 44,
		borderRadius: 44 / 2,
		backgroundColor: 'red'
	}
});


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
export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);