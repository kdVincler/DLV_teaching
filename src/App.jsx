import { useEffect, useState } from 'react'
import './css/App.css'

import Greeting from './components/0Greeting';
import Background from './components/1Background';
import Teaching from './components/2Teaching';
import Gallery from './components/3Gallery';
import Contact from './components/4Contact';


function App() {
  const [showing, setShowing] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

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
      {/* 
        navbar design from: https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb
      */}
      <nav>
        <h2 className='almostlogo'
          onClick={() => {setShowing(0); setHamburgerOpen(false)}}
        >
          Doroti Vincler
        </h2>

        <ul>
          <li className='navigator backgr'
            onClick={() => {setShowing(1); setHamburgerOpen(false)}}
            style={showing === 1 ? {"text-decoration": "underline", "text-underline-offset": "4px"} : (null) }
          >
            My background
          </li>

          <li className='navigator teach'
            onClick={() => {setShowing(2); setHamburgerOpen(false)}}
            style={showing === 2 ? {"text-decoration": "underline", "text-underline-offset": "4px"} : (null) }
          >
            Teaching
          </li>

          <li className='navigator gallery'
            onClick={() => {setShowing(3); setHamburgerOpen(false)}}
            style={showing === 3 ? {"text-decoration": "underline", "text-underline-offset": "4px"} : (null) }
          >
            Gallery
          </li>

          <li className='navigator contact'
            onClick={() => {setShowing(4); setHamburgerOpen(false)}}
            style={showing === 4 ? {"text-decoration": "underline", "text-underline-offset": "4px"} : (null) }
          >
            Contact
          </li>
        </ul>
        <style>{`
          @media (max-width: 1024px){
            nav ul {
              /* display: ${hamburgerOpen ? 'inline' : 'none'}; */
              /* from: https://elementor.com/blog/css-fade-in/?utm_source=google&utm_medium=cpc&utm_campaign=13060922353&utm_term=&lang=&gad_source=1&gclid=EAIaIQobChMIjszM4MjnhwMVlpCDBx3RGgilEAAYASAAEgIdLvD_BwE */
              display: inline;
              opacity: 0;
              ${hamburgerOpen ? 'animation: fadeIn 0.3s ease-in; opacity: 1;' : ''}
            }
            .burger1 {
              transform: ${hamburgerOpen ? 'rotate(45deg)' : 'rotate(0)'};
            }
            .burger2 {
              // transform: ${hamburgerOpen ? 'translateX(100%)' : 'translateX(0)'};
              opacity: ${hamburgerOpen ? 0 : 1}
            }
            .burger3 {
              transform: ${hamburgerOpen ? 'rotate(-45deg)' : 'rotate(0)'};
            }
          }
        `}</style>

        <div className="hamburger" onClick={toggleHamburger}>
          <div className="burger burger1"></div>
          <div className="burger burger2"></div>
          <div className="burger burger3"></div>
        </div>
      </nav>
      
      <div className="container">
        {
          renderSwitch(showing)
        }
        <footer>
          © 2024 Konrad Dominik Vincler
        </footer>
      </div>
    </>
  )
}

export default App
