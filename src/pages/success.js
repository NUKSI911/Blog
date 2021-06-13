import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
   <Layout>
     <section className="success-page">
       <div className="page-center">
         <h3> Your submission was received!</h3>
         <Link to="/"   className="btn">back home</Link>
       </div>
    
     </section>
   </Layout>
  )
}

export default Success
