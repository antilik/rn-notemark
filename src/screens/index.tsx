import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NoteScreen from './notescreen';

type TTabBarIcon =  {
  tintColor: string;
}

// Stack for Navigator
const FeedStack = createStackNavigator({
  Feed: Feed,
  Note: NoteScreen,
});
const MyStack = createStackNavigator({
  MyNotes: MyNotes,
  Note: NoteScreen,
});
const FavStack = createStackNavigator({
  Favorites: Favorites,
  Note: NoteScreen,
});

// Tabs for Navigator
const tabRoutes = {
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({tintColor}: TTabBarIcon) => (
        <MaterialCommunityIcons name='home' size={24} color={tintColor} />
      )
    },
  },
  MyNoteScreen: {
    screen: MyStack,
    navigationOptions: {
      tabBarLabel: 'My Notes',
      tabBarIcon: ({tintColor}: TTabBarIcon) => (
        <MaterialCommunityIcons name='notebook' size={24} color={tintColor} />
      )
    }
  },
  FavoriteScreen: {
    screen: FavStack,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({tintColor}: TTabBarIcon) => (
        <MaterialCommunityIcons name='star' size={24} color={tintColor} />
      )
    },
  },
};

const tabConfig = {
  tabBarOptions: {
    style: {
      paddingBottom: 5,
      height: 50,
    },
  }
};

const TabNavigator = createBottomTabNavigator(tabRoutes,tabConfig);

export default createAppContainer(TabNavigator);
