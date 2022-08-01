import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';

import './app.scss';

import Header from './components/header/Header';
import HomePage from './components/home-page/HomePage';
import MainFooter from './components/home-page/main-footer/MainFooter';
import Bucket from './components/bucket/Bucket';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/bucket' element={<Bucket />} />
          </Routes>
          <MainFooter />
      </UserContextProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
