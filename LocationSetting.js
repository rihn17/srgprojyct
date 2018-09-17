import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export class LocationSetting extends React.Component {
  static navigationOptions = {
    title: 'Location Setting',
    headerStyle: {
      backgroundColor: '#4169e1',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    phone: 'aa',
  };

  render() {
    // let { phone } = this.state;
    const { phone } = this.state;

    return (
      //<View style={styles.container}>
        <TextField
          label='Phone number'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone })}
        />
        // <Button
        //   title="Update"
        //   color="#4169e1"
        // />
      //</View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LocationSetting;
