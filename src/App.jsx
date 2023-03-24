import './App.css'
import Form from './components/common/Form'
import Home from './components/common/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from 'firebase/auth'

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  //useState
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //useNavigate
  const navigate = useNavigate()

  // function to handleAction with unique id
  const handleAction = (id) => {
    const authentication = getAuth();
    // createuser with unique id
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home")
          //session storage
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use')
          }
        })
    }

    // login user with unique id
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        }).catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email')
          }
        })
    }
  }

  // useEffect to check authToken
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/home')
    }
  }, []);

  return (
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route 
            path='login' 
            element={
              <Form 
                title="Login" 
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />} 
          />

          <Route 
            path='register' 
            element={
              <Form 
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />} 
          />
        </Routes>
      </div>
  )
}

export default App;
