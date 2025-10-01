// import Navbar from "./layout/navbar";
// import Home from "@/component/Home/Home";
import Home from "@/component/Home/Home";
import Navbar from "./layout/navbar.jsx";
import About from "@/component/About/About.jsx";
import Projects from "@/component/Project/Project.jsx";
import Contact from "@/component/Contact/Contact.jsx";
import Skills from "@/component/Skills/Skills.jsx";
import Footer from "./layout/Footer.jsx";


function page() {
  return (
    <div className="bg-black ">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}
export default page;