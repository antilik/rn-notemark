import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { INavigationScreenProp } from './feed';

import { P, StyledView } from '../styles';

export default function NoteScreen({ navigation }: INavigationScreenProp) {
  const id = navigation.getParam('id');
  const achievement = navigation.getParam('achievement');

  return (
    <StyledView style={{ padding: 10 }}>
      <StatusBar style='auto' />
      <P>This is a note {id}</P>
      <P>{achievement}</P>
    </StyledView>
  );
}
