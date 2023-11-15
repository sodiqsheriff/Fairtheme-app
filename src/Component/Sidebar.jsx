
import logo from '../assets/fairmoney-logo.png'
import bank from '../assets/bank-line.png'
import jet from '../assets/send-plane-line.png'
import coin from '../assets/coins-line.png'
import stack from '../assets/stack-line.png'
import safe from '../assets/secure.png'
import sett from '../assets/settings-4-line.png'

import {FaHeadphones} from 'react-icons/fa'
import out from '../assets/rightarrow.png'
import { useRoutes, Link } from "react-router-dom";
import Overview from './Overview'
import Payments from './Payments'
import Loans from './Loans'
import Method from './Method'
import Savings from './Savings'
import Settings from './Settings'



const Sidebar = () => {
    const subpageRoutes = useRoutes([
        { path: "/", element: <Overview /> }, // This is the default route
        { path: "/Payments", element: <Payments /> },
        { path: "/Loans", element: <Loans /> },
        { path: "/Method", element: <Method /> },
        { path: "/Savings", element: <Savings /> },
        { path: "/Settings", element: <Settings /> }
        // Add more subpage routes here
      ]);
     
   
    return(



<div className="flex w-full h-full dark:bg-black">

<div className="hidden md:hidden lg:flex flex-col border border-y-0 border-l-0 ">
    <div className="px-5 py-2 h-16 border border-x-0 border-t-0 "><img src={logo} alt="logo" className='w-4/5'/></div>
    <div className="p-5 space-y-8 pt-10 text-gray-400 capitalize font-semibold md:text-sm lg:text-md">
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
            <a href='/Savings' className="active:text-blue-800">savings</a>
        </div>
        <div className="flex gap-3">
            <img src={safe} alt="safe" />
            <a href='/Method' className="">Payments method</a>
        </div>
        <div className="flex gap-3">
            <img src={sett} alt="sett" />
            <a href="/Settings">settings</a>
        </div>
        <div className="pt-96 space-y-3">
            <div className="flex items-center gap-3">
                <FaHeadphones className='text-gray-400 text-2xl' />
                <a href="">Chat</a>
            </div>
            <div className="flex gap-3">
                <img src={out} alt="out" />
                <a href="/">Log out</a>
            </div>
        </div>
    </div>
</div>

</div>
    )}
    export default Sidebar;