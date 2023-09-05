import { StatusBar } from 'expo-status-bar';
import LicenceCard from './LicenceCard';
import DATA from './data';
import { SafeAreaView, StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import { useState } from 'react';
import LicenceModal from './LicenceModal';



export default function App() {

  const [eventList, setEventList] = useState([]);
  const [modalSee, setModalSee] = useState(false);
  const [itemSeen, setItemSeen] = useState('');

  const renderItem = ({item}) => {
    return (
      <LicenceCard
        name={item.name}
        image={item.image}
        country={item.country}
        eventList={eventList}
        setEventList={setEventList}
        setModalSee={setModalSee}
        setItemSeen={setItemSeen}
      />
    );
  };





  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LicenceModal
          modalSee={modalSee}
          setModalSee={setModalSee}
          name={itemSeen}
          eventList={eventList}
        />
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          extraData={eventList}
        />
      </View>
    </SafeAreaView>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9F566D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


