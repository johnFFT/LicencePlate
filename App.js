import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

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
    <Text>Does this work? Open up App.js to start working on your app!</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
