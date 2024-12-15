import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreLoader from './components/preLoader/preloader';
import LoadingSpinner from './components/LoadingSpinner/loadingspinner';


import StarFieldAnimation from "./layout/StarFieldAnimation";

import { About } from './pages/About';
import { Home } from './pages/Home';
import { TeamPage } from './pages/TeamPage';
import  Event  from './pages/Event';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Contact from './pages/contact';

function App() {

  const [loading,setLoading]=useState(false);

  useEffect(() => {
    const navigationType = window.performance.getEntriesByType('navigation')[0].type; 
    if (navigationType === 'reload') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false); 
      }, 3000); 
    }
  }, []); 

  useEffect(() => {

    if (!sessionStorage.getItem('preloaderShown') ) {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('preloaderShown', 'true');
        }, 3000);
    }
  }, []);
  
  return (
    <Router>
      {
        loading  ? <PreLoader loading={loading}/>
        :
        <>
        <Navbar />
        <main className="pt-0">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Event />} />
            <Route path="/teampage" element={<TeamPage />} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </main>
        <Footer/>
        {/* <Footer /> */}

        </>
      }
    </Router>
  )
}

export default App;
