import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore

firestore.collection('users').doc('gGymcIZSFd7JUuVI9bJU').collection('carditems').doc('5smhNCoW1fCuR4xFWXJh')

firestore.doc('/users/gGymcIZSFd7JUuVI9bJU/carditems/5smhNCoW1fCuR4xFWXJh')

firestore.collection('/users/gGymcIZSFd7JUuVI9bJU/carditems')