import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';

const tabRoutes = {
  FeedScreen: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',

    },
  },
  MyNotes: {
    screen: MyNotes,
    navigationOptions: {
      tabBarLabel: 'My Notes'
    }
  }
};

const tabConfig = {
  tabBarOptions: {
    style: {
      paddingBottom: 15,
      height: 45,
    },
  }
};

const TabNavigator = createBottomTabNavigator(tabRoutes,tabConfig);

export default createAppContainer(TabNavigator);
