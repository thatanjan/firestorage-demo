// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC-2tVggL08nK3pu5wQH2mPCQDQM7YuG1o',
	authDomain: 'storage-demo-11ab6.firebaseapp.com',
	projectId: 'storage-demo-11ab6',
	storageBucket: 'storage-demo-11ab6.appspot.com',
	messagingSenderId: '559463727095',
	appId: '1:559463727095:web:59a637361e0eefb71278f2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const storage = getStorage(app)

const imageRef = ref(storage, 'images/image_1.jpg')

export { storage, imageRef }
