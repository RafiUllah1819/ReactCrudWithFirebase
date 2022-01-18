import React ,{useState , useEffect} from 'react';
import { ContextNode } from './Context'; 
import { db } from '../Config/FirebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";

export const ContextState = (props) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
      const collectionRef = collection(db, "users");
      const unsubscribe = onSnapshot(
        collectionRef,
        (snapshot) => {
          if (!snapshot.empty) {
            const updatedData = snapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
            setPersons(updatedData);
          }
        },
        (error) => {
          console.log(error);
        }
      );
      return () => unsubscribe();
    }, []);
    console.log("persons", persons);
    return (
        <div>
            <ContextNode.Provider value={{persons}}>
              {props.children}
            </ContextNode.Provider>
        </div>
    )
}
