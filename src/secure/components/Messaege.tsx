import React from 'react';
import { ListItem } from '@material-ui/core';
import MessageProps from '../types/MessageProps';

function Message(props: MessageProps) {
  const content = props.content;
  const sender = props.sender;

  return (
    <ListItem><h2>{sender}: {content}</h2></ListItem>
  );
}

export default Message;