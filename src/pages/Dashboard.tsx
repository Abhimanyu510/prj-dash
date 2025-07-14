import C02 from "./CO2";
import Humidity from "./Humidity";
import FaUserCircle from "./Logo";
import Temperature from "./Temparature";



const Dashboard = () => {
  return (
    <div className="">
   <header className=" fixed top-0 left-64 ml-0 w-full h-14 flex items-center px-4 z-50 shadow font-bold text-2xl">
   Dashboard
  <div className="ml-245">
    <a href="setting">
 <FaUserCircle/>
 </a>
  </div>
   </header>

   <div className="mt-8 left-0 right-0 w-full">
    <div className="mt-20 w-full ">
      
    <Temperature/>
 </div>
   </div>
   <div className="mt-8 w-full">
    <div className="w-full">
      <Humidity/>
    </div>
   </div>
   <div className="mt-8 w-full">
    <div className="w-full">
      < C02/>
    </div>
   </div>

</div>
    
  );
};

export default Dashboard;