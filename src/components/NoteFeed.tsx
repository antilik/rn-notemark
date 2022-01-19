import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { INavigationScreenProp } from '../screens/feed';
import Notes from './Note';

import { FeedView, Separator, StyledViewStretched } from '../styles';

export interface INote {
  id: string;
  content: string;
  createdAt: any;
  favoriteCount: number;
  author: {
    username: string;
    email: string;
    avatar: string;
    id: string;
  };
}
interface INoteFeedProp extends INavigationScreenProp {
  notes: Array<INote>;
}

export default function NoteFeed({ navigation, notes }: INoteFeedProp) {
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
              navigation.navigate('Note',
                { id: item.id }
              );
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
