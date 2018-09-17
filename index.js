/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './Settings.js';

global.loc1 = 'terr';

AppRegistry.registerComponent(appName, () => App);
