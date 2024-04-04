import logo from './logo.svg';
import './App.css';
import Header from './header';
import Product from './product';

import "./style.css"

import bg from "./photos/Vector.png"

import { Fragment } from 'react';
import Categories from './categories';


function App() {
  return (
    <Fragment>
      <img src={bg} alt="page background" className="screenbg"/>
        <main className="viewpart">
        <Header />
        
        {/* <Categories/> */}
        <Product/>
        
      </main>
    </Fragment>

  );
}

export default App;
