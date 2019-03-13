import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';


class ListItemComponent extends Component {
	render() {
		return (
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
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#f1f9f9',
	}
});


const mapStateToProps = state => {
	return {
		todoList: state.todoList.todoList
	}
}

export default connect(mapStateToProps, null)(ListItemComponent);