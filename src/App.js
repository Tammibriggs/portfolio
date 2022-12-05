import './app.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import { useState } from 'react';
import { ContextProvider } from './context';

function App() {

  const [isLight, setIsLight] = useState(true)

  return (
    <div className="app" id={isLight ? 'light' : 'dark'}>
      <div className='container'>
        <ContextProvider value={{isLight, setIsLight}}>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='blog' element={<Articles />}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='contact' element={<Contact />}/>
          </Routes>   
          <Socials />
          <Footer />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;