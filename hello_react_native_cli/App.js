
import React, {useState} from 'react';
import {
  Button,
  FlatList,
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
  const [Items, setItems] = useState([
    { key: '1', name: 'Item 1' },
    { key: '2',name: 'Item 2' },
    { key: '3',name: 'Item 3' },
    { key: '4',name: 'Item 4' },
    { key: '5',name: 'Item 5' },
    { key: '6',name: 'Item 6' },
    { key: '7',name: 'Item 7' },
    { key: '8',name: 'Item 8' },
    { key: '9', name: 'Item 9' },
    { key: '101',name: 'Item 27' },
    { key: '11',name: 'Item 78' },
  ]);

  return (
    <FlatList 
      data={Items} 
      renderItem={({item}) => (
        <View style={styles.item}>
         <Text>{item.name}</Text>
        </View>
    )}
  />
    // <View style={styles.body}>
    //   <Text style={styles.text}>{sum}</Text>
    //   <Button title='add' onPress={addHandler}></Button>
    //   <Text style={styles.text}>{clicks}</Text>

    //   <Text style={styles.text}>{name}</Text>
    //   <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
    //   <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
    //   <Button title='name' onPress={onClickHandler}></Button>
    //   <Button title='Youtube' onPress={()=>{Linking.openURL('https://youtube.com/programmingwithmash')}}></Button>
    // </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
