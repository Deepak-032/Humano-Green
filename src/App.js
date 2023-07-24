import './App.css'
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import OtherProducts from './components/OtherProducts';
import OurProducts from './components/OurProducts';
import OurStory from './components/OurStory';

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <OurProducts />
      <OtherProducts />
      <OurStory />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
