import './App.css';
import Header from './components/Header/Header';
import Main from './components/Sections/Main';
import Cards from './components/Sections/Cards';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

import Footer from './components/Footer/Footer';

const App = () => {
    return(
        <>
        <Header />
        <Main />
        <Cards />
        <Projects />
        <Contact />
        <Footer />           
        </>
    );
}
export default App;