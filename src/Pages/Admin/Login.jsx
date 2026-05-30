import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const response = await axios.post(
      'http://localhost:5000/api/auth/login',
      {
        email:email,
        password:password
      }
    )

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
      </form>
    </div>
  )
}

export default Login