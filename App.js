import { StatusBar } from 'expo-status-bar';
import LicenceCard from './LicenceCard';
import DATA from './data';
import { SafeAreaView, StyleSheet, View, ScrollView, FlatList } from 'react-native';




export default function App() {

  //const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    //const color = item.id === selectedId ? 'white' : 'black';

    return (
      <LicenceCard
        name={item.name}
        image={item.image}
        flag={item.flag}
        //onPress={() => setSelectedId(item.id)}
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
      //extraData={selectedId}
    />
    </SafeAreaView>
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


/*

    <View style={styles.container}>
      <LicenceCard/>
      <StatusBar style="auto" />
    </View>
*/