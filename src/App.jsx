import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
