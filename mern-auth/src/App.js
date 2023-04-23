
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

function App() {
  return (
    <AuthContextProvider >
      <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route 
      path='/' 
      element={<Home />}
      />
      <Route 
      path='/signin' 
      element={<Signin />}
      />
      <Route 
      path='/account' 
      element={<Protected><Account /></Protected>}
      />
      </Routes>
      </BrowserRouter>
    </div>
    </AuthContextProvider>
  );
}

export default App;
