import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsApp from './app/components/ContactsApp.js';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));

const contactsAppFactory = React.createFactory(ContactsApp);

app.get('/', (req, res) => {
  console.log(JSON.stringify(contacts))
  let componentInstance = contactsAppFactory({ initialData: contacts })
  res.render('index', {
    reactInitialData: JSON.stringify(contacts),
    content: renderToString(componentInstance)
  })
})

app.listen('3000', () => {
  console.log('Server started...')
})