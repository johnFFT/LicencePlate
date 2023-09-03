import { StatusBar } from 'expo-status-bar';
import LicenceCard from './LicenceCard';
import DATA from './data';
import { SafeAreaView, StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import { useState } from 'react';



export default function App() {

  const [selectedId, setSelectedId] = useState('');

  const renderItem = ({item}) => {
    //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    //const color = item.id === selectedId ? 'white' : 'black';

    //const [seen,setSeen] = useState(false);
    

    const test2OnPress = () => {
      console.log('yupee!');
      //setSeen((prevState) => !prevState);
      setSelectedId(item.name);
      item.onPress();
    };

    return (
      <LicenceCard
        name={item.name}
        image={item.image}
        country={item.country}
        onPress = {() => test2OnPress()}
        //onPress={() => setSelectedId(item.id)}
        //backgroundColor={backgroundColor}
        //textColor={color}
      />
    );



  };





  return (
    <SafeAreaView style={styles.container}>
    <LicenceCard name={'Berta'} image={require('./img_licence/alberta.jpg')} country={'CA'}/>
    <LicenceCard name={'Murica'} image={require('./img_licence/ontario.jpg')} country={'US'}/>
    </SafeAreaView>
  );
}

/*
<FlatList 
data={DATA}
renderItem={renderItem}
//keyExtractor={item => item.id}
extraData={selectedId}
/>
*/







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9F566D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*

    <View style={styles.container}>
      <LicenceCard/>
      <StatusBar style="auto" />
    </View>
*/