import { StatusBar } from 'expo-status-bar';
import LicenceCard from './LicenceCard';
import DATA from './data';
import { SafeAreaView, StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import { useState } from 'react';


/*
const DATA = [
  {
    name : 'Berta',
    image : require('./img_licence/alberta.jpg'),
    country : 'CA'
  },
  {
    name : 'Murica',
    image : require('./img_licence/ontario.jpg'),
    country : 'US',
  },
  {
    name : 'Yukon',
    image : require('./img_licence/yukon.jpg'),
    country : 'CA',
  }
];
*/

export default function App() {

  const [eventList, setEventList] = useState([{name : 'Nova Scotia', eventDate : 'Right now'}]);

  const renderItem = ({item}) => {
    //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    //const color = item.id === selectedId ? 'white' : 'black';

    //const [seen,setSeen] = useState(false);

    return (
      <LicenceCard
        name={item.name}
        image={item.image}
        country={item.country}
        eventList={eventList}
        setEventList={setEventList}
        //backgroundColor={backgroundColor}
        //textColor={color}
      />
    );



  };





  return (
    <SafeAreaView style={styles.container}>
    <FlatList 
      data={DATA}
      renderItem={renderItem}
      //keyExtractor={item => item.id}
      extraData={eventList}
    />
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



    <LicenceCard name={'Berta'} image={require('./img_licence/alberta.jpg')} country={'CA'} eventList={[]}/>
    <LicenceCard name={'Murica'} image={require('./img_licence/ontario.jpg')} country={'US'} eventList={[]}/>
    <LicenceCard name={'Yukon'} image={require('./img_licence/yukon.jpg')} country={'CA'} eventList={[]}/>
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