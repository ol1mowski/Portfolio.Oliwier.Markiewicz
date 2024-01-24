import Header from "../components/header/header";
import Home from '../components/home/home';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Contact from "../components/contact/contact";
import Footer from '../components/footer/footer';


export default function PageLayout() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
