import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import NoteFeed from '../components/NoteFeed';

export interface INavigationScreenProp {
  navigation: NavigationScreenProp<any, any>;
}

export default function Feed({navigation}: INavigationScreenProp) {
  return <NoteFeed navigation={navigation} />;
}

Feed.navigationOptions = {
  title: 'Feed',
};
