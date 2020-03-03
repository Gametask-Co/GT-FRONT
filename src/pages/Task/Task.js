import React from 'react';

import Menu from '../../components/Menu/Menu';
import SuperCard from '../../components/Cards/SuperCard';
import './Task.sass'

function Task() {
  return (
    <>
      <Menu />
      <main id="main-task">
          <SuperCard/>
      </main>
    </>
  );
}

export default Task;
