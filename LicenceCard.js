import { Image, Pressable, StyleSheet, Text, View } from 'react-native';



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
  return (
    <Pressable style={styles.usefulbox}>
      <View style={{paddingBottom:15, backgroundColor: '#2ff'}}>
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
  )
}

const styles = StyleSheet.create({
  usefulbox: {
    width: 250,
    paddingVertical: 20,
    backgroundColor: '#eee',
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



