import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorMessage} from "../store/selectors";
import './style.scss'
const Login = ()=>{
  const [form, setForm]=useState({email:'', password:''})
  const errorMessage = useSelector(getErrorMessage)
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch({type:'LOG_IN',form})
  }
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return(
    <>
    <form className='login' onSubmit={handleSubmit}>
      <h1>JOIN US</h1>
      <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} className='info'/><br/>
      <input type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange} className='info'/><br/>
      <button type='submit' className='info'>Log in</button>
      <h2>{errorMessage}</h2>
    </form>
    </>
    )
}

export default Login;