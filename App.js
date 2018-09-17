import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation';
import LocationSetting from './LocationSetting';
import Settings from './Settings';
import Home from './Home';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  SettingsScreen: { screen: Settings, navigationOptions: { header:false,} },
});

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}
