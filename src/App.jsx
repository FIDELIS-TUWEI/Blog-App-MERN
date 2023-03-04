import './App.css'
import Form from './components/common/Form'
import Home from './components/common/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { app } from './firebase-config'
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from 'firebase/auth'

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
        })
    }
  }

  return (
      <div className="App">
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
