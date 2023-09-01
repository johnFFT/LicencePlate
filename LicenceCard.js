import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import moment from 'moment';


const LicenceCard = ({ name, image, flag }) => {
  /*
  const province = {
    name: 'Alberta',
    image: require('./img_licence/alberta.jpg'),
    flag: <Text style={{textAlign: 'center',fontSize: 20,}}>🇨🇦</Text>,
    country: 'CA'
  };
  */
  // 🇺🇸 🇨🇦

  [seen, setSeen] = useState(false);
  [eTime, setETime] = useState('');
  [modalSee, setModalSee] = useState(false);

  const testOnPress = () => {
    setSeen((prevState) => !prevState);
  }

  // onPress={() => {setSeen((prevState) => !prevState)}}>

  const longPressFun = () => {
    setModalSee((seeModal) => !seeModal);
    setETime(moment().format('lll'));
  }

  return (
    <View >
      <Modal visible={modalSee} transparent={true} animationType="fade" onBackdropPress={() => setModalSee(false)}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000a0',
          }}>
          <View style={{backgroundColor:'#446683',marginVertical: 50, marginHorizontal: 10, width : 300, height : 400}}>
            <Text>{eTime}</Text>
            <Pressable onPress={() => {setModalSee(false)}}><Text style={{margin:10}}>Close this</Text></Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.usefulbox, {backgroundColor: seen ? styles.usefulbox.selectedColor : styles.usefulbox.backgroundColor}]} onPress={() => testOnPress()} onLongPress={() => longPressFun()}>
        <View style={{paddingBottom:15, backgroundColor: seen ? styles.usefulbox.selectedColor : styles.usefulbox.backgroundColor}}>
          <Image
            style={{width:150, height:77}}
            source={image}
          />
        </View>
        <View style={{maxWidth: 150, flexWrap: 'wrap', flexDirection: 'row',}}>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'flex-end',paddingRight:10, alignItems:'center'}}>
            {flag}
          </View>
          <Text style={styles.licenseText}>{name}</Text>
          <View style={{flex: 1, flexDirection: 'row', 
          justifyContent: 'flex-start',paddingLeft:10, alignItems:'center'}}>
            {flag}
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  usefulbox: {
    width: 250,
    paddingVertical: 20,
    backgroundColor: '#A2AAAD',
    selectedColor: '#2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  licenseText: {
    color: '#000',
    fontSize: 19,
    maxWidth: 90,
    minWidth: 20,
    textAlign: 'center',
  }
});

export default LicenceCard;



