import './App.css'
import Form from './components/common/Form'
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

  // function to handleAction with unique id
  const handleAction = (id) => {
    const authentication = getAuth();
    // createuser with unique id
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          //session storage
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }
  }

  return (
    <Router>
      <div className="App">
        <Routes>
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
    </Router>
  )
}

export default App;
