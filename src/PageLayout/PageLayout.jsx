import Header from "../components/header/header";
import Home from '../components/home/home';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Contact from "../components/contact/contact";
import Footer from '../components/footer/footer';
import { BlogSection } from "../pages/BlogSection/BlogSection";


export default function PageLayout() {
    return (
        <>
            <Header />
            <Home />
            <BlogSection />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
