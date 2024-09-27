
import './App.css';
import Navbar from './Components/Navbar';
import HeroComp from './Components/HeroComp';
import AcheivementComp from './Components/AcheivementsComp';
import WhyChooseComp from './Components/whychooseComp';
import EarnComp from './Components/EarnComp';
import CardsComp from './Components/CardsComp';
import NewsletterComp from './Components/NewsletterComp';
import FooterComp from './Components/FooterComp';

function App() {
  
  return (

    <div>
      <Navbar/>
      <HeroComp/>
      <AcheivementComp/>
      <WhyChooseComp/>
      <EarnComp/>
      <CardsComp/>
      <NewsletterComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
