import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import { UserProvider } from './contexts/user.context';
import { LoadingProvider } from './contexts/loading.context';

function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
