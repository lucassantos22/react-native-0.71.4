import React from 'react';
import {TasksContext} from './src/context/TasksContext';
import {Home} from './src/pages/Home';

function App(): JSX.Element {
  return (
    <TasksContext.Provider
      value={{
        id: '1',
        title: 'task01',
      }}>
      <Home />
    </TasksContext.Provider>
  );
}
export default App;
