import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMkFJWCWShAbwXYKtm8NJTU2gjnPxZ2V4",
  authDomain: "fortplus-3613b.firebaseapp.com",
  projectId: "fortplus-3613b",
  storageBucket: "fortplus-3613b.appspot.com",
  messagingSenderId: "984096375035",
  appId: "1:984096375035:web:38e5f15456a05a8e48305e",
  measurementId: "G-ZCT74D7R7L"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firestore = getFirestore(app);
const storage = getStorage(app);

export const getFileFromStorage = async (fileUrl:string) => {
  try{
    const storageRef = ref(storage, fileUrl);
    const url = await getDownloadURL(storageRef);
    console.log("File url: ", url);
  } catch (error){
    console.error("Error downloading file: ", error);
  }
}

export const getAllFilesFromStorage = async (folderPath:string) => {
  const downloadItems:{ name: string; url:string}[] = [];
  const folderRef = ref(storage, folderPath);
  try{
    const result = await listAll(folderRef);
    const promises = result.items.map(async itemRef => {
      const name = itemRef.name;
      const url = await getDownloadURL(itemRef)
      return {name, url};
    });
    await Promise.all(promises).then(items => {
      downloadItems.push(...items);
      console.log(downloadItems);
    });
  }catch(error){
    console.log(error)
  }
  return downloadItems;
}



export const auth = getAuth(app);
export const loginUser = (email:string, password:string) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    const user = userCredential.user;
    console.log('user logged in', user);
  })
  .catch(error => {
    console.log(error);
  })
}

export const registerUser = (email:string, password:string) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(userCredentials => {
    const user = userCredentials.user;
    console.log('user registered', user);
  })
  .catch(error => {
    console.log(error);
  })
}

export const logoutUser = () => {
  auth.signOut()
  .then(() => {
    console.log('user is logged out');
  })
  .catch(error => {
    console.log(error);
  })
}