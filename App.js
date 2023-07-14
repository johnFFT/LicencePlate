import { StatusBar } from 'expo-status-bar';
import LicenceCard from './LicenceCard';
import {SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <LicenceCard/>
      <StatusBar style="auto" />
    </View>
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
