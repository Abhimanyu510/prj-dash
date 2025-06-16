
import { Routes,Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Topbar from "./components/Topbar";


const App = () => {
  return (
    <div className="flex flex-col">
      <Topbar/>
    <div className='flex'>
      <Sidebar/>
      <div className='flex-11/12 flex flex-col'>
        <Dashboard/>
      </div>
      <div className='flex-grow p-6'>
        <Routes>
          <Route path='/dashboard'
          element={<Dashboard/>}/>
          <Route path='/admin' 
          element={<Admin/>}/>
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default App
