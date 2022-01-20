import React from 'react';
import { ActivityIndicator } from 'react-native';

import { StyledView } from '../styles';

const Loading = () => {
  return (
    <StyledView>
      <ActivityIndicator size={55} color="#00bbff" />
    </StyledView>
  );
}

export default Loading;
