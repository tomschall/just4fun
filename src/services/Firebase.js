import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCNEXUf-qEVxPMZRNG-MHWjXCp2dRugvvk',
	authDomain: 'habescha-fee.firebaseapp.com',
	databaseURL: 'https://habescha-fee.firebaseio.com',
	projectId: 'habescha-fee',
	storageBucket: 'habescha-fee.appspot.com',
	messagingSenderId: '604553906720',
	appId: '1:604553906720:web:3f91cd7a2f8863b434ca45',
	measurementId: 'G-SQ4E1TBWNT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const onAuthStateChanged = (cb) => {
	firebase.auth().onAuthStateChanged(cb);
};

export const getAppointments = async () => {
	const querySnapshot = await db.collection('appointments').get();
	let appointments = [];
	querySnapshot.forEach((doc) => {
		appointments.push({ ...doc.data(), id: doc.id });
	});

	return appointments;
};

export const getReviews = async () => {
	const querySnapshot = await db.collection('appointments').get();
	let reviews = [];
	querySnapshot.forEach((doc) => {
		reviews.push({ ...doc.data(), id: doc.id });
	});

	return reviews;
};

export default firebase;
