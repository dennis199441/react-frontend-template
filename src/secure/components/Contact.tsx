import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ContactProps from '../types/ContactProps';

function Contact(props: ContactProps) {
    const name = props.name;

    return (
      <div style={{width: '100%'}}>
      <ListItem style={{width: '100%'}} button>
        <h3>{name}</h3>
      </ListItem>
      <Divider/>
      </div>
    );
}

export default Contact;