import './App.css'
import Form from './components/common/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  //useState
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
              />} 
          />

          <Route 
            path='register' 
            element={
              <Form 
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword} 
              />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
