import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { StyledView } from '../styles';

export default function Favorites() {

  return (
    <StyledView>
      <StatusBar style='auto' />
      <Text>Favorites</Text>
    </StyledView>
  );
}

Favorites.navigationOptions = {
  title: 'Favorites'
};
