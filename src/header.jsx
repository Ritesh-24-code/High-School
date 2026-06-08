import "./index.css";
import "animate.css"
import  Name from "./name"
import Navbar from "./navbar.jsx"
const header = () => {
  return (
    <div className="flex justify-between  max-md:justify-evenly items-center max-md:w-[100%] align-middle rounded-2xl m-3 max-md:m-0 max-md:p-2 my-[0.5%] px-17 bg-blue-500  shadow-xl border-b-5 border-r-5 border-gray-300 z-20 ">
      <Name/>
      <Navbar/>
    </div>
  )
}
 
export default header
