import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { INavigationScreenProp } from '../screens/feed';
import Notes from './Notes';

import { FeedView, Separator, StyledViewStretched } from '../styles';

export interface INote {
  id: number;
  content: string;
  achievement: string;
}

const notes: Array<INote> = [
  {
    id: 0,
    content: 'Nicola Becker',
    achievement: 'Monitored asymmetric product'
  },
  {
    id: 1,
    content: 'Ricky Boyle',
    achievement: 'Innovative asymmetric architecture'
  },
  {
    id: 2,
    content: 'Felipe Stroman',
    achievement: 'Fundamental high-level array'
  },
  {
    id: 3,
    content: 'Constantin Jacobi',
    achievement: 'Seamless attitude-oriented structure'
  },
  {
    id: 4,
    content: 'Avery Nitzsche',
    achievement: 'Implemented transitional middleware'
  },
  {
    id: 5,
    content: 'Kameron Effertz',
    achievement: 'Digitized even-keeled paradigm'
  },
  {
    id: 6,
    content: 'Rafaela Ullrich',
    achievement: 'Horizontal logistical portal'
  },
  {
    id: 7,
    content: 'Jadyn Ernser',
    achievement: 'Persistent intermediate moratorium'
  },
  {
    id: 8,
    content: 'Jennifer Johnston',
    achievement: 'Cloned disintermediate website'
  },
  {
    id: 9,
    content: 'Alaina MacGyver',
    achievement: 'Right-sized static data-warehouse'
  }
];

export default function NoteFeed({ navigation }: INavigationScreenProp) {
  return (
    <StyledViewStretched>
      <StatusBar style='auto' />
      <FlatList
        data={notes}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Note', {
                id: item.id,
                achievement: item.achievement
              });
            }}
          >
            <FeedView>
              <Notes note={item} />
            </FeedView>
          </TouchableOpacity>
        )}
      />
    </StyledViewStretched>
  );
}
