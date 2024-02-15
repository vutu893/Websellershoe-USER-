import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import InfoProduct from './Pages/InfoProduct/InfoProduct';
import { ToastContainer } from 'react-toastify';
import { UserContext } from './Context/userContext';
import { useContext, useEffect } from 'react';

function App() {
    const { loginContext } = useContext(UserContext)

    useEffect( () => {
        if(localStorage.getItem('token')) {
        loginContext(localStorage.getItem('email'), localStorage.getItem('token'))
        }
    },[])
  return (
        <>
            <Router>
                <div className='app'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/profile' element ={<Profile />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/infoproduct' element={<InfoProduct />} />
                    </Routes>
                </div>
            </Router>

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
        
  );
}

export default App;
