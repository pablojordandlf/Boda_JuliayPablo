import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestoreCarrousel = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      //.orderBy('createdAt', 'desc')
      .where("available", "==", true)
      .where("carrousel", "==", true)
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id})
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}
export default useFirestoreCarrousel



