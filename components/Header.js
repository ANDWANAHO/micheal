import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { useState, useEffect } from 'react';
import Link from 'next/link';
  
const Header = () => {

        const [isOpen, setIsOpen] = useState(false);
        const [sticky, setSticky] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
        });
      
        const handleScroll = () => {
          if (window.scrollY > 180) {
            setSticky(true);
          } else if (window.scrollY < 180) {
            setSticky(false);
          }
        }
    return ( 
        <Navbar color="light" light container="md" expand="md" sticky={sticky ? "top" : ""}>
      <NavbarBrand href="/">Jan Micheal </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <Nav className="m-auto" navbar>
            <NavItem className='Nav-things'>
              <Link href='/' legacyBehavior><NavLink>Home</NavLink></Link>
              
            </NavItem>
            <NavItem>
            <Link href='/Entertainment' legacyBehavior><NavLink>Entertainment</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link href='/Tech' legacyBehavior><NavLink>Tech</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link href='/Finance' legacyBehavior><NavLink>Finance</NavLink></Link>
            </NavItem>
            
            <NavItem>
            <Link href='/privacy' legacyBehavior><NavLink >Privacy</NavLink></Link>
            </NavItem>
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
     );
}
 
export default Header;