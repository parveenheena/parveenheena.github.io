import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import GitHub from "./components/GitHubCalendar";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <GitHub />
      <Contact/>
      {/* <SocialLinks /> */}
    </div>
  );
}

export default App;
