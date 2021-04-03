/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () =>  {
  return (
    <View style={styles.body}>
      <Text>Norm</Text>
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
});

export default App;
