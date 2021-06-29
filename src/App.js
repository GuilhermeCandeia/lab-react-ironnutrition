import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import FoodSearch from './components/FoodSearch';
import foodList from './foods.json';

function App() {
  return (
    <div>
      <FoodBox />
    </div>
  );
}

export default App;
