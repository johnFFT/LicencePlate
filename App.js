import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <UsefulBox/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

function UsefulBox(){
  return (
    <Pressable style={styles.usefulbox}>
      <View style={{paddingBottom:20, backgroundColor: '#0d0'}}>
        <Image
          style={{width:150, height:77}}
          source={require('./img_licence/alberta.jpg')}
        />
      </View>
      <View style={{}}>
        <Text style={styles.licenseText}>🇨🇦 Alberta 🇨🇦</Text>
        <Text style={styles.licenseText}>🇺🇸 Colorado 🇺🇸</Text>
      </View>
      
      
    </Pressable>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usefulbox: {
    height: 450,
    width: 250,
    paddingBottom : 10,
    backgroundColor: '#2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  licenseText: {
    color: '#000',
    fontSize: 20,
    backgroundColor: '#f0f'
  }
});
