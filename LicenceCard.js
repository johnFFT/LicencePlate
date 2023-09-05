import { Component } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';


class LCard extends Component {
constructor(props){
  super(props);
  this.state = {};
}

}


const getFlagJSX = (countryStr) => {
  const styles = {textAlign: 'center',fontSize: 20};
  if (countryStr === 'CA'){
    return (
      <Text style={styles}>🇨🇦</Text>
    )
  } else if (countryStr == 'US'){
    return (
      <Text style={styles}>🇺🇸</Text>
    )
  }
}


const LicenceCard = ({ name, image, country, eventList, setEventList, setModalSee, setItemSeen }) => {

  const testOnPress = () => {
    setEventList((arr) => [...arr, {name : name, eventDate : moment().format('lll')}]);
    //const arr2 = eventList.filter(item => item.name === name).map(item => item.eventDate);
    //console.log(name+arr2);
  }

  const longPressFun = () => {
    setModalSee((seeModal) => !seeModal)
    setItemSeen(name)
  }

  return (
    <Pressable style={[styles.usefulbox, {backgroundColor: eventList.filter(item => item.name === name).length > 0 ? styles.usefulbox.selectedColor : styles.usefulbox.backgroundColor}]} onPress={() => testOnPress()} onLongPress={() => longPressFun()}>
      <View style={{paddingBottom:15, backgroundColor: eventList.filter(item => item.name === name).length > 0 ? styles.usefulbox.selectedColor : styles.usefulbox.backgroundColor}}>
        <Image
          style={{width:150, height:77}}
          source={image}
        />
      </View>
      <View style={{maxWidth: 150, flexWrap: 'wrap', flexDirection: 'row',}}>
        <View style={{flex: 1, flexDirection: 'row', 
        justifyContent: 'flex-end',paddingRight:10, alignItems:'center'}}>
          {getFlagJSX(country)}
        </View>
        <Text style={styles.licenseText}>{name}</Text>
        <View style={{flex: 1, flexDirection: 'row', 
        justifyContent: 'flex-start',paddingLeft:10, alignItems:'center'}}>
          {getFlagJSX(country)}
        </View>
      </View>
      <View style={{position: 'absolute', flex : 1, bottom: 10, right: 10, backgroundColor: '#20d467'}}>
        <Text>{eventList.filter(item => item.name === name).length}</Text>
      </View>
    </Pressable>
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



