import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccount = () => {
  const [email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  const [error,setError]=useState('');
  const navigate=useNavigate();

 const create=async(e)=>{
      e.preventDefault();
  try{
    if (password!== confirmPassword){
      setError('Password is not consistent');
    }
    await createUserWithEmailAndPassword(getAuth(),email,password);
    navigate('/article-list');
  }catch(e){
    setError(e.message);
  }
 }

  return (
    <div className='create_account flex__center'>
      <h1>Create Your Account</h1>
      {error && <h4 className='error'>{error}</h4>}

      <form className='create_account__form section__padding' onSubmit={create}>
       
       <input value={email} 
        placeholder='Your email address'
        onChange={e=>setEmail(e.target.value)}
       />
  
       <input type='password' value={password} placeholder='Your password'
        onChange={e=>setPassword(e.target.value)}
       />   

       <input type='password' value={confirmPassword} placeholder='Re-enter password'
       onChange={e=>setConfirmPassword(e.target.value)}/>
        
      <input type='submit' value='Create'/>
      <Link to='/login' ><input type='submit' value='Already have account' /></Link>
 
      </form>
    </div>
  )
}

export default CreateAccount;