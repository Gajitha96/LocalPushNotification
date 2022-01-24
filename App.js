
import React,{useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
 import PushNotification from "react-native-push-notification";


 const App =  () => {
   useEffect(() =>{
createChannels();
   },[]);

  const createChannels = () => {
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
}

const handleNotification = () => {
  PushNotification.localNotification({
    channelId: "test-channel",
    title: 'Notification',
    message: 'Testing Notification',
    bigText: 'This is a big text',
    color:'red',
    largeIconUrl: 'https://img.icons8.com/fluency/344/android-os.png'
    
});
};

  return (
    <View >
    <Text>Send Notification</Text>
    <View >
    <Button 
     title="Press me" 
     onPress={handleNotification}/>
    </View>
    </View>
  )
}
export default App;
//onPress={handleNotification}