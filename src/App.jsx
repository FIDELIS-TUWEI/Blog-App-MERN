import './App.css'
import Form from './components/common/Form'
import Home from './pages/Home';

// routes
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// function for router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Form title="Login" />} />
      <Route path='register' element={<Form title="Register" />} />
    </Route>
  )
)

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
