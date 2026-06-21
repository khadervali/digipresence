import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';
import StartModal from './components/StartModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onStart={() => setModalOpen(true)} />
      <main>
        <Hero onStart={() => setModalOpen(true)} />
        <Services />
        <Work />
        <Pricing onStart={() => setModalOpen(true)} />
        <Cta onStart={() => setModalOpen(true)} />
      </main>
      <Footer />
      <StartModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}