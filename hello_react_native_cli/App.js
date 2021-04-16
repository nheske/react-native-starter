import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  Linking,
} from 'react-native';


const App = () => {
  const [name, SetName] = useState('');
  let url = 'https://www.google.com/search';
  url +='?q=myvalue';
  const [name, SetName] = useState('');
 // const [url, setState(prevState => ({ ...prevState, [name]: value }));] = useState('https://www.google.com/search?q=');
  return (
    <View style={styles.body}>
      <Text>Please enter name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(url+value)}
      />
      <Text style={styles.text}>
        Your name is: {name}
      </Text>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(url)}>search for {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
});

export default App;