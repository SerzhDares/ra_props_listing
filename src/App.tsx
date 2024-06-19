import React from 'react';
import './App.css';
import { Listing } from './components/Listing';
import { ItemCard } from './components/ItemCard';
import { data } from './data/etsy';

const items: ItemCard[] = data;

function App() {

  return (
    <div className='container'>
      <Listing items={items}/>
    </div>
  )
}

export default App;
