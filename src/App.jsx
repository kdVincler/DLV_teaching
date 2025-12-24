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
        return <Teaching redirect={setShowing}/>;
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
      {/* new reactive navbar design from daisyUI */}
      <div className="navbar bg-(--headercolour) rounded-b-xl shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            {/* DROPDOWN */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-(--headercolour) rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a onClick={() => {setShowing(1)}}>About me</a></li>
              <li><a onClick={() => {setShowing(2)}}>Teaching</a></li>
              <li><a onClick={() => {setShowing(3)}}>Gallery</a></li>
            </ul>
          </div>
          <a 
            className="font-bold text-3xl font-[Great_Vibes] pl-4 md:text-4xl"
            onClick={() => {setShowing(0)}}
          >
              Doroti Vincler
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* NAVBAR */}
          <ul className="menu menu-horizontal px-1">
            <li><a onClick={() => {setShowing(1)}}>About me</a></li>
            <li><a onClick={() => {setShowing(2)}}>Teaching</a></li>
            <li><a onClick={() => {setShowing(3)}}>Gallery</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a 
            className="btn"
            onClick={() => {setShowing(4)}}
          >
            Contact
          </a>
        </div>
      </div>
      
      <div className="mycontainer">
        {
          renderSwitch(showing)
        }
        <footer>
          Copyright © {new Date().getFullYear()} - Konrad Vincler
        </footer>
      </div>
    </>
  )
}

export default App
