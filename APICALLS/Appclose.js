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

const App = () => {

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
//   const DATA = [
//     {
//       title: 'Title 1',
//       data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
//     },
//     {
//       title: 'Title 2',
//       data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
//     },
//     {
//       title: 'Title 3',
//       data: ['Item 3-1'],
//     },
//     {
//       title: 'Title 4',
//       data: ['Item 4-1', 'Item 4-2'],
//     },
//   ]

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

    const useFetch = url => {      
        function fetchData() {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setData(responseJson);
                setLoading(false)
                console.log("data loaded")
            })
            .catch(error => console.log(error))
        }
      
        useEffect(() => {
          fetchData()
        }, []);
      
        return {loading,data};
      };


  const [Refreshing, setRefreshing] = useState(false);
//  const {loading, setLoading} = useFetch("https://jsonplaceholder.typicode.com/users");
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { name: 'Item 69' }]);
    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {loading ? <Text>loading</Text> : <Text>not loading</Text> }
    </View>
    // <SectionList
    //   keyExtractor={(item, index) => index.toString()}
    //   sections={data}
    //   renderItem={({ item }) => (
    //     <Text style={styles.text}>{item}</Text>
    //   )}
    //   renderSectionHeader={({section})=>(
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
      
    // />
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />

    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // >
    //   {
    //     Items.map((object) => {
    //       return (
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
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
    backgroundColor: '#4ae1fa',
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