import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import './App.css'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Characters />}></Route>
          <Route path='character/:id' element={<CharacterDetails />}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
