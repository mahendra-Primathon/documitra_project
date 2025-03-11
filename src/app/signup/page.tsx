import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignUpForm from '../components/SignUpForm'

const SignUp = () => {
  return (
    <div className='bg-secondary' >
      <Header/>

      {/* signup page components  */}
      <main className="flex-grow flex justify-center items-center">
        <SignUpForm/>
      </main>

      <Footer/>
    </div>
  )
}

export default SignUp
