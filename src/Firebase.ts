import { initializeApp } from "firebase/app";
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