import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { BsBell } from 'react-icons/bs'
import { FaTelegramPlane, FaHeadphones, FaLessThan, FaGreaterThan } from 'react-icons/fa'
import {LiaLessThanSolid, LiaGreaterThanSolid} from 'react-icons/lia'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import {FiSearch, FiDownload}  from 'react-icons/fi';
import {BsFilter} from 'react-icons/bs'
import profile from '../assets/Profile.png'
import logo from '../assets/fairmoney-logo.png'
import high from '../assets/currency-line.png'
import installment from '../assets/calander.png'
import overdue from '../assets/reddet.png'
import debit from '../assets/redcard.png'
import bureaus from '../assets/red-line.png'
import fair from '../assets/fair-icon.png'
import save from '../assets/stack-line.png'
import opay from '../assets/opay.png'
import wema from '../assets/wemabank.png'
import bank from '../assets/bank-line.png'
import jet from '../assets/send-plane-line.png'
import coin from '../assets/coins-line.png'
import stack from '../assets/stack-line.png'
import secure from '../assets/secure.png'
import sett from '../assets/settings-4-line.png'
import out from '../assets/rightarrow.png'
import Sidebar from "./Sidebar"


const LoanPoint = () => {
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

  return (
    <div className='flex h-full md:h-screen lg:h-full w-full' > 
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
    <div className='flex flex-col dark:text-white leading-tight'>
      <h1 className="text-md md:text-lg font-bold capitalize ">terms of use</h1>
    </div>
    <div className={`dashboard ${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
  
  <div className={`theme-switcher flex gap-2  items-center ${isDarkMode ? 'dark:bg-black' : 'bg-white'} p-2 rounded-md shadow-inner`}>
  <p className="ml-2 text-sm md:text-md text-black dark:text-white">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-2xl' : 'bg-gray-100 shadow-inner'}`}
    >
      <div className="flex shadow-inner   space-x-3 md:space-x-5">
        {isDarkMode ? <IoSunnyOutline className='bg-gray-400 text-white h-5 dark:bg-gray-800 dark:text-gray-600  rounded w-7'  /> : <IoMoonOutline  />}
        {isDarkMode ? <IoMoonOutline className='dark:text-white '/> : <IoSunnyOutline   className='text-black bg-white h-5 shadow-inner dark:bg-black  rounded w-7' />}
      </div>
    </button>
    <div className="flex items-center space-x-8">
   <BsBell className='text-2xl' />
   <img src ={profile} alt='profile' className='rounded-full' />
   </div>
  </div>
  {/* Other content of your Dashboard */}
  
</div>
</div>
<div className="flex-col">
  <a href="/Loans/*" className='flex gap-1 items-center font-semibold capitalize p-5 dark:text-white'><LiaLessThanSolid />back</a>
  <h1 className="font-bold text-lg px-5 dark:text-white">if you pay on time...</h1>
  <div className="flex items-center px-5 pt-5">
    <div className="flex-col ps-3 pr-5"><img src={high} alt =''/></div>
    <div className="flex-col space-y-1 text-green-500">
        <h1 className="text-sm capitalize font-semibold">higher amounts</h1>
        <h1 className="text-xs text-gray-400">Up to #1,000,000</h1>
    </div>
  </div>
  <div className="flex items-center px-5 pt-5">
    <div className="flex-col ps-3 pr-5"><img src={installment} alt =''/></div>
    <div className="flex-col space-y-1 text-green-500">
        <h1 className="text-sm capitalize font-semibold">installments</h1>
        <h1 className="text-xs text-gray-400">spread your payments</h1>
    </div>
  </div>
  <h1 className="font-bold text-lg p-5 dark:text-white">if you pay late...</h1>
  <div className="flex items-center px-5 pt-5">
    <div className="flex-col ps-3 pr-5"><img src={debit} alt =''/></div>
    <div className="flex-col space-y-1 text-red-500">
        <h1 className="text-sm capitalize font-semibold">automatic debit</h1>
        <h1 className="text-xs text-gray-400">on your bank account</h1>
    </div>
  </div>
  <div className="flex items-center px-5 pt-5">
    <div className="flex-col ps-3 pr-5"><img src={overdue} alt =''/></div>
    <div className="flex-col space-y-1 text-red-500">
        <h1 className="text-sm capitalize font-semibold">interest for overdue amount</h1>
        <h1 className="text-xs text-gray-400">if your payments is delayed, a penalty fee will be charged in accordance
        <br />with the regulatory guidelines set by the Central Bank of Nigeria (CBN).</h1>
    </div>
  </div>
  <div className="flex items-center px-5 pt-5">
    <div className="flex-col ps-3 pr-5"><img src={bureaus} alt =''/></div>
    <div className="flex-col space-y-1 text-red-500">
        <h1 className="text-sm capitalize font-semibold">credit bureaus</h1>
        <h1 className="text-xs text-gray-400">spread your payments</h1>
    </div>
  </div>
  <h1 className="text-sm font-gray-400 py-4 text-gray-400 px-5">Read our <b className='text-black underline dark:text-white'>terms of use</b> and <b className="text-black underline dark:text-white">privacy policy online</b> </h1>
  <h1 className="text-sm text-gray-400 px-5">
    Loan amounts range between #1,500 to #1,000,000 with repayment period from 61 <br />
    days to 18 months at monthly interest rates that range from 2.5% to 30% (APRs from <br />
    30% to 260%).
  </h1>
  <div className="pt-3 px-5 flex items-center gap-1 font-bold dark:text-white">
    <input type="checkbox" name="" id="" />
    <h1 className='text-sm'>Read our terms of use and privacy policy online.</h1>
  </div>
  <div className="bg-gray-500 md:w-4/5 lg:w-1/2 mt-5 mb-36 py-2 mx-5 text-white text-center capitalize rounded">
        <a href="*">next</a>
      </div>
</div>

</div>
    </div>
  )
}



export default LoanPoint