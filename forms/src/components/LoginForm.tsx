import './LoginFormStyle.css'

const LoginForm = () => {
  return (
    <div className='loginForm'>
              <h2 className='welcome'>
                Welcome back!
              </h2>
          <form  className='form' action="">
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <button type="submit" className='login'>Login</button>            
          </form>
              <a href="#" className='forgotPassword'>Forgot password ?</a>
              <p>Don't have an account yet ? <a href="#" className='registerNow'>Register</a></p>
      </div>
  )
}

export default LoginForm