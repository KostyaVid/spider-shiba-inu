import React, { createContext, useEffect, useState } from 'react';
import './App.scss';
import Conquer from './Components/Conquer/Conquer';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import HowWorks from './Components/HowWorks/HowWorks';
import Line from './Components/Line/Line';
import Mount from './Components/Mount/Mount';
import Offer from './Components/Offer/Offer';
import Play from './Components/Play/Play';
import Roadmap from './Components/Roadmap/Roadmap';
import Partners from './Components/Team/Partners/Partners';
import Team from './Components/Team/Team';
import Tokenomics from './Components/Tokenomics/Tokenomics';

export const BreakPoints = createContext<'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'>('xs');

function App() {
  const [breakPoints, setBreakPoints] = useState<'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'>(() => {
    switch (true) {
      case document.body.clientWidth >= 1400:
        return 'xxl';

      case document.body.clientWidth >= 1200:
        return 'xl';

      case document.body.clientWidth >= 992:
        return 'lg';

      case document.body.clientWidth >= 768:
        return 'md';

      case document.body.clientWidth >= 576:
        return 'sm';

      case document.body.clientWidth < 576:
        return 'xs';

      default:
        return 'xs';
    }
  });
  function resize() {
    switch (true) {
      case document.body.clientWidth >= 1400:
        setBreakPoints('xxl');
        break;
      case document.body.clientWidth >= 1200:
        setBreakPoints('xl');
        break;
      case document.body.clientWidth >= 992:
        setBreakPoints('lg');
        break;
      case document.body.clientWidth >= 768:
        setBreakPoints('md');
        break;
      case document.body.clientWidth >= 576:
        setBreakPoints('sm');
        break;
      case document.body.clientWidth < 576:
        setBreakPoints('xs');
        break;

      default:
        setBreakPoints('xs');
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [breakPoints]);

  return (
    <div className="App">
      <BreakPoints.Provider value={breakPoints}>
        <Header />
        <main>
          <Hero />
          <Line />
          <Conquer />
          <HowWorks />
          <Play />
          <Offer />
          <Roadmap />
          <Mount />
          <Team />
          <Partners />
          <Tokenomics />
          <Mount mini={true} />
          <FAQ />
        </main>
        <Footer />
      </BreakPoints.Provider>
    </div>
  );
}

export default App;
