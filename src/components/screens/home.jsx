import React from 'react';
import Dashboard from '../dashboard';
import Gridlist from '../gridlist/gridlist';

const Home = () => (
  <Dashboard>
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
  </Dashboard>
);
export default Home;
