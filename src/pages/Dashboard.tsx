import C02 from "./CO2";
import Humidity from "./Humidity";
import FaUserCircle from "./Logo";
import Temperature from "./Temparature";



const Dashboard = () => {
  return (
    <div className="bg-green-50  ">
   <header className=" fixed top-0 left-60 w-full h-14 flex items-center px-4 z-50 shadow font-bold text-2xl">
   Dashboard
  <div className="ml-245">
    <a href="setting">
 <FaUserCircle/>
 </a>
  </div>
   </header>

   <div className="mt-8 p-2">
    <div className="mt-20 p-4">
      
    <Temperature/>
 </div>
   </div>
   <div>
    <div className="mt-4 p-4">
      <Humidity/>
    </div>
   </div>
   <div>
    <div className="mt-4 p-4">
      < C02/>
    </div>
   </div>

</div>
    
  );
};

export default Dashboard;