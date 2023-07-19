import { BrowserRouter } from "react-router-dom";

import { About, Contact,  Hero, Navbar,  Works, StarsCanvas, UpcomingEvents,Sponsors, Footer} from "./components";
import Robot from "./components/Robot";


const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 '>
      
          <Navbar />
          <div className='relative z-0 bg-black'>
          <Hero />
          <StarsCanvas />
          </div>
        <About />
        <UpcomingEvents />
        <Works />
        <Sponsors />
        <div className='relative z-0 bg-black'>
<Robot/>
          <Contact />
          <StarsCanvas />
        </div>
         <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
