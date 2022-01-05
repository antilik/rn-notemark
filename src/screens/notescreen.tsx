import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyledView, P } from '../styles';

export default function NoteScreen() {
  return(
    <StyledView style={{padding: 10}}>
      <StatusBar style='auto' />
      <P>This is a note!</P>
    </StyledView>
  )
}
