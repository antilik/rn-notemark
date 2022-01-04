import React from 'react';
import { Text } from 'react-native';

import { StyledView } from '../styles';
import { StatusBar } from 'expo-status-bar';

export default function Feed() {
  return(
    <StyledView>
      <StatusBar style="auto" />
      <Text>Feed</Text>
    </StyledView>
  );
}
