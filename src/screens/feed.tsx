import React, { useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { gql, useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed';
import { P } from '../styles';

export interface INavigationScreenProp {
  navigation: NavigationScreenProp<any, any>;
}

const GET_NOTES = gql`
  query notes {
    notes {
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

export default function Feed(props: INavigationScreenProp) {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) {
    return <P>Loading</P>;
  }
  if (error) {
    return <P>Error loading notes</P>;
  }

  return <NoteFeed navigation={props.navigation} notes={data.notes} />;
}

Feed.navigationOptions = {
  title: 'Feed',
};
