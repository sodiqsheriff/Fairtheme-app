import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { BsBell } from 'react-icons/bs'
import { FaTelegramPlane, FaHeadphones } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import {FiSearch, FiDownload}  from 'react-icons/fi';
import {BsFilter} from 'react-icons/bs'
import profile from '../assets/Profile.png'
import logo from '../assets/fairmoney-logo.png'
import save from '../assets/stack-line.png'
import bank from '../assets/bank-line.png'
import jet from '../assets/send-plane-line.png'
import coin from '../assets/coins-line.png'
import stack from '../assets/stack-line.png'
import secure from '../assets/secure.png'
import sett from '../assets/settings-4-line.png'
import out from '../assets/rightarrow.png'
import Sidebar from "./Sidebar"

const Settings =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
       setIsOpen(!isOpen);
    };
    const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Check local storage for theme preference and set the initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []); // The empty dependency array ensures this effect runs only once on component mount
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
};
    return(
      <div className='flex' > 
      <div className="hidden md:hidden lg:flex lg:w-1/5">
        <Sidebar />
      </div>
        <div className="flex flex-col w-full h-full md:flex md:flex-col md:justify-right ">
  <div className="flex justify-between items-center p-5 md:flex  lg:hidden">
      <div className=""><img src={logo} alt="logo" className='w-1/2'/></div>
      <button className='flex justify-end  text-4xl dark:text-white px-5  lg:hidden ' onClick={toggleMenu}>
      {isOpen ?( <MdOutlineClose className='' />): <GiHamburgerMenu /> }
    </button>
    {isOpen  &&(
      <div onClick={toggleMenu} className="flex flex-col absolute  top-0 right-0 bottom-0 w-1/2 h-full  px-5 pt-5 space-y-8 text-gray-400 capitalize font-semibold text-sm bg-white dark:bg-black">
     <MdOutlineClose className='text-right text-5xl text-black dark:text-white' />
     <div className="flex gap-3">
          <img src={bank} alt="bank" />
          <a href='/Overview' className="">overview</a>
      </div>
      <div className="flex gap-3">
          <img src={jet} alt="jet" />
          <a href='/Payments' className="">Payments</a>
      </div>
      <div className="flex gap-3">
          <img src={coin} alt="coin" />
          <a href='/Loans' className="">loans</a>    
            </div>
      <div className="flex gap-3">
          <img src={stack} alt="stack" />
          <a href='/Savings' className="">savings</a>
      </div>
      <div className="flex gap-3">
          <img src={secure} alt="secure" />
          <a href='/Method' className="">Payments method</a>
      </div>
      <div className="flex gap-3">
          <img src={sett} alt="sett" />
          <a href="/Settings">settings</a>
      </div>
      <div className="mt-auto space-y-3">
          <div className="flex items-center gap-3">
              <FaHeadphones className='text-gray-400 text-2xl' />
              <a href="">Chat</a>
          </div>
          <div className="flex items-center gap-3">
              <img src={out} alt="out" />
              <a href="/">Log out</a>
          </div>
      </div>
  </div>
    
    )}
  </div>

  <div className="flex justify-between items-center ps-5 py-2 md:px-8 md:border md:border-x-0 md:border-t-0 lg:h-16 ">
      <h1 className="5xl">settingssssss</h1>
  </div>

</div>
      </div>

    )
}
export default Settings