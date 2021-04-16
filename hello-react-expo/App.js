import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Meetup</Text>
      <StatusBar style="auto" />
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.meetup.com/sandiegojs')}>Some Link</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
