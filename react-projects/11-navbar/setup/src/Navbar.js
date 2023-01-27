import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  // When in small width window size you collapse/hide the links
  // container the height becomes 0, and if you resize the width
  // to a wide screen mode > 800px, you will not be able to see
  // the links. 
  // Note that the solution is to use !important to override 0px:
  // .links-container {
  //  height: auto !important;
  // }
  // The reason to have <div> container enclosing <ul> is because
  // the height of links-container is 0.
  // .links-container {
  //   height: 0;
  //   overflow: hidden;
  //   transition: var(--transition);
  // }
  // and we can print linksContainerRef's height it will return 0.
  // But as we can see linksRef's height it is not.
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`; // no space before px
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo'/>
        <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const {id, url, text} = link;
            return (          
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
            const {id, url, icon} = socialIcon;
            return (          
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
      </ul>
    </div>

  </nav>
}

export default Navbar
