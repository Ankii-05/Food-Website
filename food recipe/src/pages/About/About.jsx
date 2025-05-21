import React from 'react'
import Layout from '../../component/Layout/Layout'
import Section1 from './Section1'
import Section2 from './Section2'

export default function About() {
  return (
    <Layout>

        {/* About Section For Details */}
        <Section1/>

        {/* About Section For Chef Details */}
        <Section2/>

    </Layout>
  )
}
