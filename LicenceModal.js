import { Modal, View, Text, Pressable } from "react-native";



const LicenceModal = ({modalSee, setModalSee, name, eventList }) => {

    return (
        <Modal visible={modalSee} transparent={true} animationType="fade" onBackdropPress={() => setModalSee(false)}>
            <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000a0',
            }}>
                <View style={{backgroundColor:'#446683',marginVertical: 50, marginHorizontal: 10, width : 300, height : 400}}>
                    <Text>{name} - {eventList.filter(item => item.name === name).map(item => item.eventDate)}</Text>
                    <Pressable style={{position: 'absolute', flex : 1, bottom: 10, right: 10, backgroundColor: '#20d467'}} onPress={() => {setModalSee(false)}}><Text style={{margin:10}}>Close this</Text></Pressable>
                </View>
            </View>
      </Modal>
    )
}


export default LicenceModal;