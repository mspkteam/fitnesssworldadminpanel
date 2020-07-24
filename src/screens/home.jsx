import React from 'react'
import Gridlist from '../components/gridlist/gridlist'
import Layout from '../components/common/layout'

const Home = () => (
  <Layout>
    <h1>
      INFORMATIONAL VIDEOS
    </h1>
    <Gridlist />
    <h1>
      WORKOUT VIDEOS
    </h1>
    <Gridlist />
    <h1>
      TRAINING VIDEOS
    </h1>
    <Gridlist />
  </Layout>
)
export default Home
