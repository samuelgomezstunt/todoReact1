import React from 'react';
import {TodoProvider} from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar curso react', completed: false },
//   { text: 'Otra cosa', completed: false },
// ];


function App() {
  return (
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
  );
}

export default App;
