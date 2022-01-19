import { Image, StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

export const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const StyledViewStretched = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;
export const H1 = styled.Text`
  color: #0077cc;
  font-size: 48px;
  font-weight: bold;
`;
export const P = styled.Text`
  margin: 24px 0;
  font-size: 18px;
`;
export const IMG = styled.Image`
  width: 100%;
  height: 470px;
`;
export const FeedView = styled.View`
  height: 90px;
  overflow: hidden;
  margin-bottom: 10px;
`;
export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ced0d1;
`;
export const NoteView = styled.ScrollView`
  padding: 10px;
`;
