import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0" style={{ backgroundColor: '#200f5e38' }}>
        <div className="bg-hero-pattern bg-center">
          <div>
            <Navbar />
          </div>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
       
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
