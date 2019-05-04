import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'
import configureStore from './store'
import {Provider} from 'react-redux'

const store = configureStore()

const UserApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => UserApp);











