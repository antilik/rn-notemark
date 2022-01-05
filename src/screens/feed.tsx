import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { StyledView, P } from '../styles';

export interface FeedScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default function Feed({ navigation }: FeedScreenProps) {

  return (
    <StyledView>
      <StatusBar style='auto' />
      <P>Note Feed</P>
      <Button title='Keep reading' onPress={() => navigation.navigate('Note')} />
    </StyledView>
  );
}

Feed.navigationOptions = {
  title: 'Feed'
};
