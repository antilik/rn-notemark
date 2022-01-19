import React from 'react';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';

import { INote } from './NoteFeed';

import { NoteView, P } from '../styles';

interface INotesProps {
  note: INote;
}

export default function Note({ note }: INotesProps) {
  return (
    <NoteView>
      <P>Note by {note.author.username} / Published{' '}
        {format(new Date(note.createdAt), 'MMM do yyyy')}
      </P>
      <Markdown>{note.content}</Markdown>
    </NoteView>
  );
}
