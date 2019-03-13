import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItemComponent = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f1f9f9',
  }
});

export default ListItemComponent;