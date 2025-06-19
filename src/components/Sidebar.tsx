
import { NavLink } from "react-router-dom";
import { LuUsersRound } from "react-icons/lu";
import { RiHomeSmileFill } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className='bg-green-50 w-64 h-screen px-6 py-4 shadow-md'>
        <h1 className='text-2xl font-bold text-green-600 mb-6'>project_name</h1>
        <p className='text-xs text-gray-500 mb-14'>MAIN MENU</p>
        <nav className='flex flex-col gap-2'>
            <NavLink
            to='/dashboard'
            className={({ isActive }) => 
            `flex items-center gap-2 px-3 py-2 rounded-lg ${
               isActive? 'bg-pink-100 shadow text-black': 'text-gray-600 hover:bg-green-100'
            }`
            }
            >
               <RiHomeSmileFill />
                Dashboard
            </NavLink>
            <NavLink
            to='/admin'
            className={({ isActive }) => 
            `flex items-center gap-2 px-3 py-2 rounded-lg ${
             isActive? 'bg-pink-100 shadow text-black': 'text-gray-600 hover:bg-green-100'
            }`
            }
            >
                <LuUsersRound />
                Admin
            </NavLink>
        </nav>
      
    </div>
  )
}

export default Sidebar;
