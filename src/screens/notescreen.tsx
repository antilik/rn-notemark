import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useQuery, gql } from '@apollo/client';

import { INavigationScreenProp } from './feed';
import Note from '../components/Note';
import Loading from '../components/Loading';

import { P, StyledView } from '../styles';

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id:$id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

export default function NoteScreen({ navigation }: INavigationScreenProp) {
  const id = navigation.getParam('id');
  const { loading, error, data } = useQuery(GET_NOTE, {variables: {id}});

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <P>Error! Note not found</P>;
  }

  return (
    <StyledView style={{ padding: 10 }}>
      <StatusBar style="auto" />
      <Note note={data.note} />
    </StyledView>
  );
}
