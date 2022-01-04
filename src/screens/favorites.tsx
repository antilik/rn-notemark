import React from 'react';
import { Text } from 'react-native';

import { StyledView } from '../styles';
import { StatusBar } from 'expo-status-bar';

export default function Favorites() {

  return (
    <StyledView>
      <StatusBar style="auto" />
      <Text>Favorites</Text>
    </StyledView>
  );
}
