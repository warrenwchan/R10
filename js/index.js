/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Router from './navigation/router';
import { StatusBar } from 'react-native';
import Store from './redux/store';
import NavigationLayout from './navigation/NavigationLayout'

import { Provider } from 'react-redux'

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';


const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

