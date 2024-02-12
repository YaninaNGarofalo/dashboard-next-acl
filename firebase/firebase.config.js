
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, doc,getDoc, getDocs, addDoc, deleteDoc, getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAolH8xkPrzpqsFD0R2jTAfiMngNNBuUHk",
  authDomain: "nextjs-tool.firebaseapp.com",
  projectId: "nextjs-tool",
  storageBucket: "nextjs-tool.appspot.com",
  messagingSenderId: "8586546563",
  appId: "1:8586546563:web:f4cb3d6c745337c253fab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const clientRef = collection(db, "TR_Clients");
const employeeRef = collection(db, "TR_Employees");
const projectRef = collection(db, "TR_Projects");
const userRef = collection(db, "TR_Users");

//TR_Users
export const getUsers = async () => {
  const snapshot = await getDocs(userRef);
  const projects = await Promise.all(
    snapshot.docs.map(async(doc) => {
     const data = {...doc.data()}
     const modifiedBy = await getDoc(data['Modified By'])
     const createdBy = await getDoc(data['Created By'])
     const modified = data['Modified']  
     const created = data['Created']
     const tempObj ={
       Name : data.Name? data.Name:'',
       Password:data.Password? data.Password:'',
       'Modified By' : modifiedBy.data()?.Name? modifiedBy.data().Name:'',
       'Modified' : modified.toDate().toDateString(),
       'Created By' : createdBy.data()?.Name?createdBy.data().Name:'',
       'Created' : created.toDate().toDateString(),       
       id: doc.id,
     }      
     return tempObj
   })).then((res) => res);
   return projects
  
};

export const addUser = async (user) => {
  await addDoc(collection(db, userRef), user);
};

export const updateUser = async (user, id) => {
  await updateDoc(doc(db, userRef, id),user);
};

export const deleteUser = async (userID) => {
  await deleteDoc(doc(db, userRef, userID));
};

//TR_Projects
export const getProjects = async () => {
  const snapshot = await getDocs(projectRef);
  const projects = await Promise.all(
    snapshot.docs.map(async(doc) => {
     const data = {...doc.data()}
     const projectAdmin = await getDoc(data['Project Admin'])
     const clientName = await getDoc(data['Client_ID'])
     const modifiedBy = await getDoc(data['Modified By'])
     const createdBy = await getDoc(data['Created By'])
     const modified = data['Modified']  
     const created = data['Created']
     const projectEndDt = data['Project End Date']
     const tempObj ={
       Name : data.Name? data.Name:'',
       Client :clientName.data()?.Name ?clientName.data().Name :'',
       'Project Admin':projectAdmin.data()?.Name ?projectAdmin.data().Name :'',
       'Project End Date':projectEndDt.toDate().toDateString(), 
       'RollOff Ack Pending Count': data['RollOff Ack Pending Count'],
       'Revoke Past Due Count' : data['Revoke Past Due Count'],
       'SoD Count':data['SoD Count'],
       'Modified By' : modifiedBy.data()?.Name? modifiedBy.data().Name:'',
       'Modified' :modified.toDate().toDateString(),
       'Created By' : createdBy.data()?.Name?createdBy.data().Name:'',
       'Created' : created.toDate().toDateString(),       
       id: doc.id,
     }      
     return tempObj
   })).then((res) => res);
   return projects
};

export const addProject = async (project) => {
  await addDoc(collection(db, projectRef), project);
};

export const updateProject = async (project, id) => {
  await updateDoc(doc(db, projectRef, id),project);
};

export const deleteProject = async (projectID) => {
  await deleteDoc(doc(db, projectRef, projectID));
};

//TR_Clients
export const getClients = async () => {
  const snapshot = await getDocs(clientRef);
  const clients = await Promise.all(
   snapshot.docs.map(async(doc) => {
    const data = {...doc.data()}
    const accountManager = await getDoc(data['Account Manager'])
    const modifiedBy = await getDoc(data['Modified By'])
    const createdBy = await getDoc(data['Created By'])
    const modified = data['Modified']  
    const created = data['Created']
    const tempObj ={      
      Name : data.Name,
      'Account Manager':accountManager.data().Name,
      'RollOff Ack Pending Count': data['RollOff Ack Pending Count'],
      'Revoke Past Due Count' : data['Revoke Past Due Count'],
      'SoD Count':data['SoD Count'],
      'Modified By' : modifiedBy.data().Name,
      'Modified' :modified.toDate().toDateString(),
      'Created By' : createdBy.data().Name,
      'Created' : created.toDate().toDateString(),
      id: doc.id
    }       
    return tempObj
  })).then((res) => res);
  return clients
};

export const addClient = async (client) => {
  const systemRef =  collection(db,"TR_Users/0"); 
  console.log('some ref**********',systemRef ) 
  console.log(systemRef)
  const accountManagerRef = doc(db, userRef, client['Account Manager']?.id)
  console.log(accountManagerRef)
  client['Account Manager'] = accountManagerRef
  client['Modified By'] = systemRef
  client['Created By'] = systemRef
  console.log(client)
  await addDoc(collection(db, clientRef), client);
};

export const updateClient = async (client, id) => {
  await updateDoc(doc(db, clientRef, id),client);
};

export const deleteClient = async (clientID) => {
  await deleteDoc(doc(db, clientRef, clientID));
};

//TR_Employees
export const getEmployeesRoster = async () => {
  const snapshot = await getDocs(employeeRef);
  const employees = await Promise.all(
    snapshot.docs.map(async(doc) => {
     const data = {...doc.data()}
     const tempObj ={       
       Name : data.Name,
       'Last Name':data['Last Name'],
       'Roll-On Date': data['Roll On Dt'].toDate().toDateString(),
       'Roll-Off Date': data['Roll Off Dt'].toDate().toDateString(),
       'Roll-On Ack Date': data['Roll On Ack Dt'].toDate().toDateString(),
       'Roll-Off Ack Date': data['Roll Off Ack '].toDate().toDateString(),
       'Initial Training Date': data['Initial Training Dt'].toDate().toDateString()
     }       
     return tempObj
   })).then((res) => res);
   return employees
};
export const getEmployeesACL = async () => {
  const snapshot = await getDocs(employeeRef);
  const employees = await Promise.all(
    snapshot.docs.map(async(doc) => {
     const data = {...doc.data()}
     const tempObj ={       
       Name : data.Name,
       'Last Name':data['Last Name'],
       'Roll-Off Date': data['Roll Off Dt'].toDate().toDateString(),
       'Roll-Off Ack Date': data['Roll Off Ack '].toDate().toDateString(),
       'Prod Access': data['Prod Access']? 'Yes':'No',
       'Non-Prod Access': data['Non Prod Access']? 'Yes':'No',
       'SoD': data['SoD']? 'Yes':'No',
       'Access Revoke Date':data['Access Revoke Dt'].toDate().toDateString()
     }       
     return tempObj
   })).then((res) => res);
   return employees
};

export const addEmployee = async (employee) => {
  await addDoc(collection(db, employeeRef), employee);
};

export const updateEmployee = async (employee, id) => {
  await updateDoc(doc(db, employeeRef, id),employee);
};

export const deleteEmployee= async (employeeID) => {
  await deleteDoc(doc(db, employeeRef, employeeID));
};
