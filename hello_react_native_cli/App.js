/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () =>  {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Norm</Text>
      <Button title='Youtube' onPress={()=>{Linking.openURL('https://youtube.com/programmingwithmash')}}></Button>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#aaaaff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
