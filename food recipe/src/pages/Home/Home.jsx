import React from 'react'
import Layout from '../../component/Layout/Layout'
import '../../styles/HomeStyle.css'
import '../../styles/section2.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'


function Home() {
  return (
    <>
    <Layout>
        {/* Home Secction Hero Section */}
        <Section1/>

        {/* Home Section 2 About page */}
        <Section2/>

        {/*Home Section Menu  */}
        <Section3/>

        {/* Home Section Promotion */}
        <Section4/>

    </Layout>
    </>
  )
}

export default Home
