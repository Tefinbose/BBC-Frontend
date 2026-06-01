import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        email:email,
        password:password
      }
    )
    console.log(response);
    
    localStorage.setItem('admin',JSON.stringify(response.data.user));

    localStorage.setItem('token', response.data.token)

    navigate('/admin')
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <form
        onSubmit={handleLogin}
        className='shadow-xl p-8 roundedw-[400px]'
      >
        <h1 className='text-3xl font-bold mb-6'>Admin Login</h1>

        <input
          type='email'
          placeholder='Email'
          className='border w-full p-3 mb-4'
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          className='border w-full p-3 mb-4'
          onChange={e => setPassword(e.target.value)}
        />

        <button className='bg-black text-white w-full py-3 rounded'>
          Login
        </button>

        <p className="text-center">
    Don't have an account?{" "}
    
    <Link
      to="/admin/register"
      className="text-blue-600 font-semibold"
    >
      Register
    </Link>

  </p>
      </form>
    </div>
  )
}

export default Login