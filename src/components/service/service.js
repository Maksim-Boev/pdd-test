import firebase from "firebase/app"
import "firebase/storage"
import "firebase/database"

const firebaseConfig = {
	apiKey: "AIzaSyDzfm9SH0bVSOv3r_S_y0lYIwGtVUvQS_s",
	authDomain: "pdd-test-ecb50.firebaseapp.com",
	projectId: "pdd-test-ecb50",
	storageBucket: "pdd-test-ecb50.appspot.com",
	databaseURL: "https://pdd-test-ecb50-default-rtdb.firebaseio.com",
	messagingSenderId: "985815868389",
	appId: "1:985815868389:web:c7276d1b38a6733ca0450c"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database().ref("ticket/")

export const getTicket = async () => {
let arr = []
await database.once('value',  (snapshot) => {
	snapshot.forEach((childSnapshot) => {
		let childData = childSnapshot.val();
		arr.push(childData)
	});
})
	 return arr
}