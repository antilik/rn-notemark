import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyledView, P } from '../styles';

export default function MyNotes() {
  return(
    <StyledView>
      <StatusBar style="auto" />
      <P>My Notes</P>
    </StyledView>
  );
}

MyNotes.navigationOptions = {
  title: 'My Notes',
}
