// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDzfm9SH0bVSOv3r_S_y0lYIwGtVUvQS_s',
  authDomain: 'pdd-test-ecb50.firebaseapp.com',
  projectId: 'pdd-test-ecb50',
  storageBucket: 'pdd-test-ecb50.appspot.com',
  databaseURL: 'https://pdd-test-ecb50-default-rtdb.firebaseio.com',
  messagingSenderId: '985815868389',
  appId: '1:985815868389:web:c7276d1b38a6733ca0450c',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref('ticket/');

// eslint-disable-next-line import/prefer-default-export
export const getTicket = async () => {
  const arr = [];
  await database.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      arr.push(childData);
    });
  });
  return arr;
};
