import React from 'react';

import { INote } from './NoteFeed';

import { NoteView, P } from '../styles';

interface INotesProps {
  note: INote;
}

export default function Notes({ note }: INotesProps) {
  return (
    <NoteView>
      <P>{note.content}</P>
    </NoteView>
  );
}
