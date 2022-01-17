import {
  ADDRECORD,
  EDITRECORD,
  DELELTERECORD,
  UPDATERECORD,
} from "../Constants/index";

// const addData = async(obj) =>  {
//     const collectionRef = collection(db, 'users');
//     try{
//         await addDoc(collectionRef, obj)
//     }
//     catch(err){
//         console.log(err)
//     }
//   return {
//     type: ADDRECORD,
//     payload: obj,
//   };
// };
const addData = (obj) => {
  return {
    type: ADDRECORD,
    payload: obj,
  };
};

const editData = (id) => {
  return {
    type: EDITRECORD,
    payload: id,
  };
};

const deleteData = (id) => {
  return {
    type: DELELTERECORD,
    payload: id,
  };
};

const updateData = (id) => {
  return {
    type: UPDATERECORD,
    payload: id,
  };
};

export { addData, editData, deleteData, updateData };
