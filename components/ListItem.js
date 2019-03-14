import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, Title, Right, Body } from "native-base";

import { connect } from 'react-redux';


class ListItemComponent extends Component {
	render() {
		return (
			<Container>
				<Header span style={styles.header}>
					<Body>
						<Title>Todo</Title>
					</Body>
					<Right />
				</Header>
				<FlatList style={styles.listContainer}
					data={this.props.todoList}
					keyExtractor={(item, index) => index.toString()}
					renderItem={info => (
						<TouchableOpacity>
							<View style={styles.listItem}>
								<Text>{info.item.value}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
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
	}
});


const mapStateToProps = state => {
	return {
		todoList: state.todoList.todoList
	}
}

export default connect(mapStateToProps, null)(ListItemComponent);