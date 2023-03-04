import './App.css'
import Form from './components/common/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  //useState
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // function to handleAction
  const handleAction = () => {

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
                handleAction={() => handleAction()}
              />} 
          />

          <Route 
            path='register' 
            element={
              <Form 
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction()}
              />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
