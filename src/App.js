import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
