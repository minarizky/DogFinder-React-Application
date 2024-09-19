import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import dogs from './dogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

