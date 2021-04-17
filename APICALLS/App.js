import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

export default function App() {
  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 27' },
    { name: 'Item 78' },
  ]);
  const STATIC_DATA = 
  [ {title: 'Title 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],},
    {title: 'Title 2', data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],},
    { title: 'Title 3', data: ['Item 3-1'],},
  ]

  const STATIC_DATA2 =  [ { id: 1, name: 'Leanne Graham',},  { id: 2,  name: 'Ervin Howell',},]


  
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const useFetch = url => {      
    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson)
            setApiData(responseJson);
            setLoading(false)
            console.log("data loaded")
        })
        .catch(error => console.log(error))
    }
  
    useEffect(() => {
      fetchData()
    }, []);
  
    return {loading,data: apiData};
  };

//  const {something, setSomething} = useFetch("https://jsonplaceholder.typicode.com/users");
  const a = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>{loading ? 'y' :'n'}</Text>
      {loading ? <Text>waiting</Text> :
      // <Text>data</Text>
          //   <SectionList
          //   keyExtractor={(item, index) => index.toString()}
          //   sections={STATIC_DATA2}
          //   renderItem={({ item }) => (
          //     <Text style={styles.text}>{item}</Text>
          //   )}
          //   renderSectionHeader={({section})=>(
          //     <View style={styles.item}>
          //       <Text style={styles.text}>{section.title}</Text>
          //     </View>
          //   )}
          // />
              <FlatList
              keyExtractor={(item, index) => index.toString()}
//              data={STATIC_DATA2}
              data={apiData}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              )}
            />
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});