// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Technologies from './components/technologies';
import "./App.css";
function App() {
  return (
    <div className="App" style={{height:'80vh'}}>
      <Header />
      <main>
        <section id="home" style={{height: '90vh'}}>
          <Home/>
        </section>
        <section id="experience" >
          <Experience></Experience>
        </section>
        <hr></hr>
        <section id="technology" >
          <Technologies></Technologies>
        </section>
        <hr></hr>
        <section id="contact">
          <Contact></Contact>
        </section>
      </main>
    </div>
  );
}

export default App;