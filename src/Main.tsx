import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const imgSource =
  'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.Text`
  color: #0077cc;
  font-size: 48px;
  font-weight: bold;
`;
const P = styled.Text`
  margin: 24px 0;
  font-size: 18px;
`;
const IMG = styled.Image`
  width: 100%;
  height: 470px;
`;

export default function Main() {
  return (
    <StyledView>
      <StatusBar style="auto" />
      <H1>Hello world!</H1>
      <P>This is my app</P>
      <IMG source={{ uri: imgSource }} resizeMode="contain" />
    </StyledView>
  );
}
//
// const styles = StyleSheet.create({
// });
