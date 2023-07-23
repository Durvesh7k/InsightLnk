import React, { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import Home from './pages/Home';
import Header from './components/Header';
import Create from './pages/Create';
import About from './pages/About';
import BlogPage from './pages/BlogPage';
import UpdatePost from './pages/UpdatePost';
import Account from './pages/Account';
import Footer from './components/Footer';

const PrivateRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
  else {
    return <Navigate replace to='/login' />
  }
}


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/about' element={<About />} />
            <Route path='/account' element={<Account />} />
            <Route path='/details/:id' element={<BlogPage />} />
            <Route path='/update/:id' element={<UpdatePost />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </DataProvider>

  )
}

export default App;