import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';


export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#4169e1',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  state = {
    cam1: global.location1,
    cam2: global.location2,
    cam3: global.location3,
  };

  updateGlobal(index, newLocation){
    switch(index) {
      case 1:
        global.location1 = newLocation;
        console.warn("111");
        break;
      case 2:
        global.location2 = newLocation;
        console.warn("2222");
        break;
      case 3:
        global.location3 = newLocation;
        console.warn("333");
        break;

    }
  }

  // update(){
  //   // const newLocation = (cam1);
  //   // this.setState({cam1:newLocation});
  // };

  render(){
    const { cam1 } = this.state;
    const { cam2 } = this.state;
    const { cam3 } = this.state;

    return(
      <View>
        <TextField
        label='CAM1'
        value={cam1}
        onChangeText={ (cam1) => this.setState({ cam1 })}
        onSubmitEditing={({ cam1 }) =>  this.updateGlobal(1, this.state.cam1)}
        />
        <TextField
        label='CAM2'
        value={cam2}
        onChangeText={ (cam2) => this.setState({ cam2 })}
        onSubmitEditing={({ cam2 }) =>  this.updateGlobal(2, this.state.cam2)}
        />
        <TextField
        label='CAM3'
        value={cam3}
        onChangeText={ (cam3) => this.setState({ cam3 })}
        onSubmitEditing={({ cam3 }) =>  this.updateGlobal(3, this.state.cam3)}
        />
      </View>
        // <View style={{alignItems: 'center', justifyContent: 'center'}}>
        //   <Button
        //   onPress={()=>this.update()}
        //   title="Update"
        //   color="#4169e1"
        //   />
        // </View>
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
});

export default Settings;
