import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import faqMain from '../components/faq/faqMain'

function page() {
  return (
    <div>
        <Header/>
        {/* <Faqheader/> */}
        <faqMain/>
        <Footer/>
      
    </div>
  )
}

export default page
