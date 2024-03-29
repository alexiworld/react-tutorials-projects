/* add dynamic import */
import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        {/*  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank */}

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass='nav-icon' />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
