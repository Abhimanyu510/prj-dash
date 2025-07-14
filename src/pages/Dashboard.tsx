import C02 from "./CO2";
import Humidity from "./Humidity";
import FaUserCircle from "./Logo";
import Temperature from "./Temparature";



const Dashboard = () => {
  return (
    <div className="bg-green-50">
   <header className=" fixed top-0 left-60 w-full h-14 flex items-center px-4 z-50 shadow font-bold text-2xl">
   Dashboard
  <div className="ml-245">
    <a href="setting">
 <FaUserCircle/>
 </a>
  </div>
   </header>

   <div className="mt-8 p-2 left-0 right-0">
    <div className="mt-20 p-2  ">
      
    <Temperature/>
 </div>
   </div>
   <div className="m-8 p-2">
    <div className=" p-0 m-0">
      <Humidity/>
    </div>
   </div>
   <div className="m-8 p-2">
    <div className="mt-0 p-0 m-0">
      < C02/>
    </div>
   </div>

</div>
    
  );
};

export default Dashboard;