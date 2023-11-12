
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Overview from "./Component/Overview";
import Payments from "./Component/Payments";
import Loans from "./Component/Loans";
import Savings from "./Component/Savings";
import Method from "./Component/Method";
import Settings from "./Component/Settings";
import './App.css'

const App = () => {
  const router= createBrowserRouter([ 
    {path: "/", element: <Login />}, 
    {path: "Dashboard", element: <Dashboard />} ,
    {path: "/Overview/*", element: <Overview />} ,
    {path: "/Payments/*", element: <Payments />} ,
    {path: "/Loans/*", element: <Loans />},
    {path: "/Savings/*", element: <Savings />},
    {path: "/Method/*", element: <Method />},
    {path: "/Settings/*", element: <Settings />} 
       ])
  

  return (
    <div className='w-full h-full dark:bg-black'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
