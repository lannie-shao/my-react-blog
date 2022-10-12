import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {
  const [email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error,setError]=useState('');

  const navigate=useNavigate();

  const logIn= async(e)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(getAuth(),email,password);
      navigate('/article-list');
    }catch(e){
      setError(e.message);
    } 
  }
  
  return (
    <div className='login flex__center'>
      <h1>Login Your Account</h1>
      {error && <p className='error'>{error}</p>}

      <form className='login__form section__padding' onSubmit={logIn} >
       
       <input type='email'  value={email} 
        placeholder='123@abc.com'
        onChange={e=>setEmail(e.target.value)}
       />

       <input type='password' value={password} placeholder='Your password'   
        onChange={e=>setPassword(e.target.value)}
       />   

       <div className='login__submit'>
         <input type='submit' value='Login' />
         <Link to='/create-account' ><button type='button'>Create Account</button></Link>
       </div>
      </form>
    </div>
  )
}

export default LoginPage;