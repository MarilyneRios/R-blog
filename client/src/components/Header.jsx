import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { Link, useLocation,  } from 'react-router-dom';

// images
import Logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function Header() {

  const path = useLocation().pathname;


  return (
    <Navbar className="border-b-2">
      {/**Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-base sm:text-xl font-semibold dark:text-white "
      >
        <div className="flex items-center ">
          <img src={Logo} alt="Logo" className="w-12 h-auto mr-2" />
          <div className=" px-2 py-1 text-gray-800">
            <span>Blog</span>
          </div>
        </div>
      </Link>
      {/** Search */}
      <form>
        <TextInput
          type="text"
          placeholder="rechercher..."
          rightIcon={IoSearchOutline}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-14 h-10 pb-10 lg:hidden border " color="black" pill>
        <IoSearchOutline className="w-5 h-6" />
      </Button>
      {/**Dark mode */}
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-14 h-10 pb-10 hidden sm:inline  border"
          color="black"
          pill
        > 
          <MdDarkMode className="w-6 h-6" />
        </Button>
        {/** <CiDark />*/}
        {/**btn sign-in */}
       <Link  to="sign-in" >
        <Button className="" gradientDuoTone='purpleToBlue' outline>
          Connexion
        </Button>
      </Link>
      <NavbarToggle></NavbarToggle>
      </div>
       {/**Menu : Links */}
       <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Acceuil</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>A propos</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projets</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/lessons'} as={'div'}>
          <Link to='/lessons'>Leçons</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
