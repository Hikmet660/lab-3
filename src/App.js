import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Lawyer from './components/Lawyer';
import Navbar from './components/Navbar';
import Case from './components/Case';
import Logos from './components/Logos';
import Lawyers2 from './components/Lawyers2';
import Reviews from './components/Reviews';
import Answer from './components/Answer';
import ContactUs from './components/ContactUs';
import RecentBlogs from './components/RecentBlogs';
import FooterTop from './components/FooterTop';
import Footer from './components/Footer';
import PracticeAreasCards from './components/PracticeAreasCards';
import Explore from './components/Explore';



function App() {
  return (
    <>
    
    <Navbar />
    <Lawyer />
    <Explore />
    <PracticeAreasCards />
    <Case />
    <Logos />
     <Lawyers2 />
     <Reviews />
     <Answer />
     <ContactUs />
     <RecentBlogs />
     <FooterTop />
     <Footer />
    </>
  );
}

export default App;
