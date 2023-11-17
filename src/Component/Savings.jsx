import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { BsBell } from 'react-icons/bs'
import { FaHeadphones } from 'react-icons/fa'
import profile from '../assets/Profile.png'
import logo from '../assets/fairmoney-logo.png'
import bank from '../assets/bank-line.png'
import jet from '../assets/send-plane-line.png'
import coin from '../assets/coins-line.png'
import stack from '../assets/stack-line.png'
import secure from '../assets/secure.png'
import sett from '../assets/settings-4-line.png'
import out from '../assets/rightarrow.png'
import spot from '../assets/spot.png'
import safee from '../assets/lock.png'
import flex from '../assets/flexibl.png'
import scale from '../assets/growth.png'
import daily from '../assets/daily.png'
import tree from '../assets/tree.png'
import green from '../assets/cbn.png'
import rate from '../assets/compass.png'
import returns from '../assets/door-lock.png'
import maturity from '../assets/auto.png'
import plans from '../assets/checkbox-multiple-line.png'
import days from '../assets/upto.png'
import tenure from '../assets/scales-3-line.png'
import Sidebar from "./Sidebar"
import { LiaGreaterThanSolid } from 'react-icons/lia';

const Savings =()=>{
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
  <div onClick={toggleMenu} className="flex flex-col absolute  top-0 right-0  w-1/2 h-full  px-5 pt-5 space-y-8 text-gray-400 capitalize font-semibold text-sm bg-white dark:bg-black">
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
    <h1 className="text-md md:text-lg font-bold capitalize ">savings</h1>
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
<div className="px-5">
<h1 className="text-lg font-semibold py-5">Explore the savings options curated for you</h1>
<div className="flex flex-col md:flex-row gap-5">
  <div className="flex-col bg-yellow-50  border w-full md:w-1/2 p-5 rounded-xl shadow-xl dark:bg-gray-950">
    <h1 className="text-sm font-bold dark:text-white">Grow your money!</h1>
    <div className="flex text-xs py-5 font-semibold gap-7 md:gap-10 lg:gap-14 tracking-wide dark:text-white">
    <div className="flex-col space-y-4">
      <div className="flex gap-2">
          <img src={spot} alt="" className='dark:bg-white w-5 h-5 ' />
          <h1>Ease withdrawal anytime,anyday </h1>
      </div>
      <div className="flex gap-2">
      <img src={safee} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Safe and secure </h1>
      </div>
      <div className="flex gap-2">
      <img src={flex} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Flexible and Cost Effective</h1>
      </div>
      </div>
      <div className="flex-col space-y-4">
      <div className="flex gap-2">
      <img src={scale} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>10% per annum </h1>
      </div>
      <div className="flex gap-2">
      <img src={daily} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Daily interest earnings </h1>
      </div>
      <div className="flex gap-2">
      <img src={tree} alt=""  className='dark:bg-white  w-5 h-5'/>
          <h1>No fees, Reliable</h1>
      </div>
      </div>
    

    </div>
    <div className="flex-col">
      <h1 className="pb-5 text-2xl font-bold dark:text-white">FairSave</h1>
      <h1 className="text-xs pb-5 tracking-wide text-gray-400">
        When you think of a high interest savings account,FairSave stands as 
        <br />the ultimate saving platform for you. FairSave is our savings product
        <br />designed to help people save and make money everyday.
      </h1>
      <div className="flex items-center gap-2  capitalize font-bold dark:text-white">
        <h1>Explore</h1>
        <LiaGreaterThanSolid className='text-sm font-bold' />
      </div>

    </div>

  </div>
  <div className="flex-col bg-yellow-50  border w-full md:w-1/2 p-5 rounded-xl shadow-xl dark:bg-gray-950">
    <h1 className="text-sm font-bold dark:text-white">Achieve Your Goals Faster!</h1>
    <div className="flex text-xs py-5 font-semibold gap-7 md:gap-14 tracking-wide dark:text-white">
    <div className="flex-col space-y-4">
      <div className="flex gap-2">
          <img src={rate} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>24% interest rate per annum</h1>
      </div>
      <div className="flex gap-2">
        <img src={returns} alt="returns" className='dark:bg-white  w-5 h-5' />
          <h1>Fixed Deposit, High returns </h1>
      </div>
      <div className="flex gap-2">
        <img src={maturity} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Automatic Withdrawal on Maturity</h1>
      </div>
      </div>
      <div className="flex-col space-y-4">
      <div className="flex gap-2">
        <img src={days} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Up to 7-730 days</h1>
      </div>
      <div className="flex gap-2">
        <img src={tenure} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Flexible Tenures </h1>
      </div>
      <div className="flex gap-2">
        <img src={plans} alt="" className='dark:bg-white  w-5 h-5' />
          <h1>Multiple Deposit Plans</h1>
      </div>
      </div>
    

    </div>
    <div className="flex-col">
      <h1 className="pb-5 text-2xl font-bold dark:text-white">FairSave</h1>
      <h1 className="text-xs pb-5 tracking-wide text-gray-400">
        When you think of a high interest savings account,FairSave stands as 
        <br />the ultimate saving platform for you. FairSave is our savings product
        <br />designed to help people save and make money everyday.
      </h1>
      <div className="flex items-center gap-2  capitalize font-bold dark:text-white">
        <h1>Explore</h1>
        <LiaGreaterThanSolid className='text-sm font-bold' />
      </div>

    </div>

  </div>

</div>
  <div className="flex items-center gap-2 justify-center mx-auto rounded-2xl bg-green-200 p-1 w-80 mb-36 mt-5">
    <img src={green} alt="green" />
    <h1 className="text-xs text-center">Licensed by <b className='text-green-700'>CBN. Deposits insured by <b className='text-green-700'>NDIC</b></b></h1>
  </div>
</div>
</div>

</div>
  </div>

)
}
export default Savings;