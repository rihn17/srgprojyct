import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import PushNotification from 'react-native-push-notification';

export class Home extends React.Component {

   constructor(){
     super();
     this.configure();
     global.location1 = '';
     global.location2 = '';
     global.location3 = '';
     this.lastId = 0;

   };

   componentDidMount() {
  //   this.localNotif();
   }

  static navigationOptions = {
    title: 'Baby Monitor',
    headerStyle: {
      backgroundColor: '#4169e1',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state={
    toggle: false,
    isSafe: false,
    location: "Terrace",
  };

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  };
  configure() {
    PushNotification.configure({


      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
        * (optional) default: true
        * - Specified if permissions (ios) and token (android and ios) will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
    });
  }
  localNotif() {
    PushNotification.localNotification({
      /* Android Only Properties */
      id: ''+this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      ticker: "My Notification Ticker", // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
      subText: "This is a subText", // (optional) default: none
      color: "red", // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: "group", // (optional) add group to message
      ongoing: false, // (optional) set whether this is an "ongoing" notification

      /* iOS only properties */
      alertAction: 'view', // (optional) default: view
      category: null, // (optional) default: null
      userInfo: null, // (optional) default: null (object containing additional notification data)

      /* iOS and Android properties */
      title: "Local Notification", // (optional)
      message: "My Notification Message", // (required)
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
    });
    this.lastId++;

  }  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('cam1', global.location1);
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }
  //
  // _retrieveData = async () => {
  // try {
  //   const value = await AsyncStorage.getItem('cam1');
  //   if (value !== null) {
  //     // We have data!!
  //     console.log(value);
  //   }
  //  } catch (error) {
  //    // Error retrieving data
  //  }
//}


  render() {
    const {toggle} = this.state;
    const textValue = toggle?"ON":"OFF";
    const textColor = 'lightyellow';
    const {isSafe} = this.state;
    const textValue2 = isSafe?"Baby is safe :)":"Baby is in danger!!!";
    const {location} = this.state;
    const textValue3 = toggle?(isSafe?"":"current loaction: "+location):"";

    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity
          onPress={()=>this._onPress()}
          style={styles.button1}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
              Monitoring
            </Text>
            <Text style={{textAlign: 'center', fontSize: 36, color: textColor, fontWeight: 'bold'}}>
              {textValue}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          {toggle ?
            <Text style={styles.text}>{textValue2}
            </Text> : null
          }
          <Text style={styles.text}>{textValue3}</Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SettingsScreen')}
          style={styles.button2}>
            <Image source={require("./assets/settings.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button1: {
    margin: 90,
    flex: 1,
    height: 120,
    backgroundColor: '#4169e1',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: 'lightyellow',
    elevation: 10,
  },
  view2: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 40,
    fontSize: 24,
    color: '#4169e1',
  },
  view3: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button2: {
    // backgroundColor: '#859a9b',
    marginBottom: 20,
  },
});

export default Home;
