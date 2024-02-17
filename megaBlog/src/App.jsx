import { useState ,useEffect} from 'react'
import {useDispatch}from 'react-redux'
import  authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import Header from './components/Header/Header.jsx'
import Footer from'./components/Footer/Footer.jsx'

import './App.css'

function App() {
  const [loading, setLoadong] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoadong(false))
  },[])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
          <Header/>
          <main>
            
          </main>
          <Footer/>
      </div>
      
        
    </div>
  ): null
}

export default App
