import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCq0gogGEh0Ps50nDyZ6pSHcn5xWR_EONI',
  authDomain: 'bicycles-96e14.firebaseapp.com',
  projectId: 'bicycles-96e14',
  storageBucket: 'bicycles-96e14.appspot.com',
  messagingSenderId: '500863936653',
  appId: '1:500863936653:web:962705aa11b2e9c9529ac4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
