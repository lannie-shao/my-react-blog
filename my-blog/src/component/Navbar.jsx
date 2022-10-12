
import {Link, useNavigate} from 'react-router-dom';
import React,{useState} from 'react';
import { getAuth, signOut } from "firebase/auth";
import useUser from '../hooks/useUser';

const Navbar = () => {
  const navigate=useNavigate();
  const [error, setError] = useState('');
  const user=useUser();
  const logOut=()=>{
    const auth = getAuth();
    signOut(auth).then((user) => {
      navigate('/');
    }).catch((error) => {
      setError(error.message);
    });
  }

  return (  <div className='nav'>
  <div className='nav__link'>
    <Link to='/'><p>HomePage</p></Link>
    <Link to='/about'><p>About</p></Link>
    <Link to='/article-list'><p>Articles</p></Link>
  </div>

  {error&& <p>{error}</p>}
  {user? (
    <div className='logout'>
    <button className='customer_button' onClick={logOut}>logout</button>
  </div>
  ):<Link to='/login' ><button className='customer_button' >Login</button></Link>}

  </div>

  )
}

export default Navbar;


