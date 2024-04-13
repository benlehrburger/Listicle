import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

function CustomList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() !== '') {
      setList([...list, input]);
      setInput('');
    }
  };

  const handleDeleteItem = index => {
    setList(list.filter((_, i) => i !== index));
  };

  const renderRightActions = (progress, dragX, index) => {
    const trans = dragX.interpolate({
      inputRange: [-60, 0],
      outputRange: [0, 60],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        onPress={() => handleDeleteItem(index)}
        style={[styles.deleteButton, { transform: [{ translateX: trans }] }]}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => (
    <Swipeable
      renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, index)}
      rightThreshold={10}  // Start revealing the delete button when swiped at least 10px
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemText}>{item}</Text>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Items</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <TextInput
            style={styles.input}
            onChangeText={setInput}
            onSubmitEditing={handleAddItem}
            value={input}
            placeholder="Add an item"
            blurOnSubmit={false}
            returnKeyType="done"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
  },
  listItemText: {
    flex: 1,
  },
  deleteButton: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  }
});

export default CustomList;