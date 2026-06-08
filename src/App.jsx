import "./index.css";
import Header from "./header.jsx"
import Landing from "./landing_page.jsx"
import Welcome_para from "./welcome_para.jsx"
import Facility from "./facilities.jsx"
import Principal from "./principal.jsx"
import About_us from "./about_us.jsx"
import Upcoming from "./upcoming_sec.jsx"
import Hr from "./hr.jsx"
import Bar from "./bar.jsx"
import Footer from "./footer.jsx"
const App = () => {
  return (
    <div className="  " >
      <div className=" animate__animated animate__fadeInDown">
        <Header />
      </div>
      <div id="landing_page" className="" >
        <Landing />
      </div>
      <div className=" justify-center flex items-center align-middle">
        <div className="w-[80vw]">
          <Welcome_para />
        </div>
      </div>
      <Hr />
      <div>
        <Facility />
      </div>
      < Hr />
      <div>
        <Bar />
      </div>
      < Hr />
      <div>
        <Principal />
      </div>
      < Hr />
      <div>
        <About_us />
      </div>
      < Hr />
      <div>
        <Upcoming />
      </div>
      < Hr />
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
