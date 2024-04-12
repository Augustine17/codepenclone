import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './pages/Home/Home';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LoginInPage/LogInPage';
import { SET_USER } from './redux/actions/userActions';

import { auth, db } from './config/firebase';
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore"; 

import {useDispatch} from 'react-redux'
import CodeEditor from './pages/CodeEditor/CodeEditor';
import Projects from './pages/Projects/Projects';
import { SET_PROJECTS } from './redux/actions/projectActions';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userCred)=>{
      if(userCred){
        setDoc(doc(db,'users',userCred?.uid), userCred?.providerData[0]).then(()=>{
          console.log("hell");
             dispatch(SET_USER(userCred?.providerData[0]))
             console.log("shell");
        })
      }
   })

   return unsubscribe;
  },[])

  useEffect(()=>{
   const project = query(collection(db,"projects"))

   const unsubscribe = onSnapshot(project, (querSnaps)=>{
    const list = querSnaps.docs.map((doc)=>doc.data());
    dispatch(SET_PROJECTS(list))
   })

   return unsubscribe;
  },[])

  return (
   
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="newproject" element={<CodeEditor />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
 
  );
}

export default App;
