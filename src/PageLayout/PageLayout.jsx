import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Home from "../components/home/home";
import Projects from "../components/Projects/Projects";


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
