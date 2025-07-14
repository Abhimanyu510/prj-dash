

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {FaEdit, FaTrash  } from "react-icons/fa";

const AdminData = [
  {id:1,name:'Ankit',email:'test@test.com',phone:'+919876543210',Address:'xyz',status:'Active'},
  {id:1,name:'Vikash',email:'test@test.com',phone:'+919876543210',Address:'abc',status:'Active'},
  {id:1,name:'Ajay',email:'test@test.com',phone:'+919876543210',Address:'abc',status:'Not Active'},
  {id:1,name:'Nidhi',email:'test@test.com',phone:'+919876543210',Address:'abc',status:'Not Active'},
  {id:1,name:'Priyanka',email:'test@test.com',phone:'+919876543210',Address:'abc',status:'Not Active'},
  {id:1,name:'Akshay',email:'test@test.com',phone:'+919876543210',Address:'xyz',status:'Active'}
]



const AdminTable = () => {
  const [entries, setEntries] = useState(10);
  return (
   <div className="bg-green-50 w-full  ">

      <div className="min-h-screen w-full py-0">
 

  <header className="bg-white fixed top-0 left-64 w-full h-14 flex items-center px-4 z-50 shadow font-bold text-2xl ">
   Admin
  <span className="ml-256">
    <FaUserCircle/>
  </span>
   </header>


<div className="mt-0 p-4">
<button className=" mt-20 shadow py-2 px-4 bg-blue-700 text-white hover:bg-indigo-700 rounded-md cursor-pointer fixed right-20">
  + Add Admin
</button>
</div>


<div className="bg-white shadow">
<div className="mt-40 p-2">
  <button className="px-3 py-1">Show</button>
  <select className="bg-gray-400 rounded" 
  value={entries}
  onChange={(e) => 
   setEntries(Number(e.target.value))}>
    {[5,10,15,20].map((val) => (
      <option value={val} key={val}>{val}</option>
    ))}
   </select>
  <button className="px-3 py-1">entries</button>
<table className="min-w-full text-sm text-center">
  <thead>
    <tr className=" uppercase text-xs">
      <th className="py-3 px-4">SI.NO</th>
      <th className="py-3 px-4">Name</th>
      <th className="py-3 px-4">Email</th>
      <th className="py-3 px-4">Phone no</th>
      <th className="py-3 px-4">Address</th>
      <th className="py-3 px-4">Status</th>
      <th className="py-3 px-4">Action</th>
    </tr>
  </thead>
  <tbody>
    {AdminData.map((admin,idx) => (
      <tr key={admin.id} className="text-gray-700 bg-violet-100 even:bg-white odd:bg-violet-50">
        <td className="p-2 ">{idx+1}</td>
        <td className="p-2 ">{admin.name}</td>
        <td className="p-2 ">{admin.email}</td>
        <td className="p-2 ">{admin.phone}</td>
        <td className="p-2 ">{admin.Address}</td>
        
        <td className="p-2 ">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${admin.status === 'Active' ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
          {admin.status}
          </span>
          </td>
          <div className="flex justify-center">
          <td className="p-2 flex justify-center">
            <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
          <FaEdit/>
          </button>
          </td>
          <td className="p-2  flex justify-center">
            <button className="text cursor-pointer text-red-600 hover:text-red-800">
            <FaTrash/>
            </button>
            
          </td>
          </div>
      </tr>
    
    ))}
  </tbody>
  
</table>


<div className="flex justify-center mt-4 gap-2 text-sm cursor-pointer">
<button className="px-3 py-1  text-gray-500 cursor-pointer hover:text-gray-700">Previous</button>
<button className="px-3 py-1 hover:bg-blue-600 hover:text-white bg-gray-400 rounded">1</button>
<button className="px-3 py-1 bg-gray-400 hover:bg-blue-600 hover:text-white rounded">2</button>
<button className="px-3 py-1 bg-gray-400 hover:bg-blue-600 hover:text-white rounded">3</button>
<button className="px-3 py-1  text-gray-500 cursor-pointer hover:text-gray-700">Next</button>

</div>

</div>
    </div>
    </div>
    </div>
  )
}

export default AdminTable
