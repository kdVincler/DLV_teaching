import { useEffect, useState } from 'react'
import './css/App.css'

import Greeting from './components/0Greeting';
import Background from './components/1Background';
import Teaching from './components/2Teaching';
import Gallery from './components/3Gallery';
import Contact from './components/4Contact';


function App() {
  const [showing, setShowing] = useState(0);

  useEffect(() => {
    document.title = "Doroti Vincler"
  })

  function renderSwitch(flag) {
    switch(flag) {
      case 0:
        return <Greeting />;
      case 1:
        return <Background />;
      case 2:
        return <Teaching />;
      case 3:
        return <Gallery />;
      case 4:
        return <Contact />;
      default:
        return <Greeting />  
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav>
        <p className='navigator backgr'
          onClick={() => {setShowing(1)}}
        >
          My background
        </p>

        <p className='navigator teach'
          onClick={() => {setShowing(2)}}
        >
          Teaching
        </p>

        <p className='navigator almostlogo'
          onClick={() => {setShowing(0)}}
        >
          <b>Doroti</b>
          <b>Vincler</b>
        </p>

        <p className='navigator gallery'
          onClick={() => {setShowing(3)}}
        >
          Gallery
        </p>

        <p className='navigator contact'
          onClick={() => {setShowing(4)}}
        >
          Contact
        </p>
      </nav>
      
      <div className="container">
        {
          renderSwitch(showing)
        }
      </div>

      <footer>
        © 2024 Konrad Dominik Vincler
      </footer>
    </>
  )
}

export default App
