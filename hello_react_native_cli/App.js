
import React, {useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () =>  {
  const [name, setName] = useState('Treb')
  const [session, setSession] = useState({ number: 6, title: 'state'})
  const [current, setCurrent] = useState(true)
  const [clicks, setClicks] = useState(0)

  const [sum, setSum] = useState(0)

  const onClickHandler = ()=>{
    setName('programming')
    setSession({ number: 7, title: 'style'})
    setCurrent(false)
  }

  const addHandler = ()=>{
    setClicks(clicks+1)
    setSum(sum+5)
  }


  return (
    <View style={styles.body}>
      <Text style={styles.text}>{sum}</Text>
      <Button title='add' onPress={addHandler}></Button>
      <Text style={styles.text}>{clicks}</Text>

      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='name' onPress={onClickHandler}></Button>
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
