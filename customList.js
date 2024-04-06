import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Keyboard } from 'react-native';


function CustomList() {
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');

  const handleAddFirst = () => {
    if (firstInput.trim() !== '') {
      setFirstList([...firstList, firstInput]);
      setFirstInput('');
    }
  };

  const handleAddSecond = () => {
    if (secondInput.trim() !== '') {
      setSecondList([...secondList, secondInput]);
      setSecondInput('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First List</Text>
      <FlatList
        data={firstList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <TextInput
            style={styles.input}
            onChangeText={setFirstInput}
            onSubmitEditing={handleAddFirst}
            value={firstInput}
            placeholder="Add an item"
            blurOnSubmit={false}
            returnKeyType="done"
          />
        }
      />

      <Text style={styles.title}>Second List</Text>
      <FlatList
        data={secondList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <TextInput
            style={styles.input}
            onChangeText={setSecondInput}
            onSubmitEditing={handleAddSecond}
            value={secondInput}
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
    marginTop: 20,
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
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
  }
});

export default CustomList;
