
import { Apresentacao } from './components/Apresentacao/Apresentacao';
import { CasosDeUsoSection } from './components/CasosDeUsoSection/CasosDeUsoSection';
import { Contact } from './components/Contact/Contact';
import { FaqSection } from './components/Faq/Faq';
import { Navbar } from './components/Navbar/Navbar';
import { PlanosSection } from './components/Planos/Planos';
import { Sobre } from './components/Sobre/Sobre';


export function App() {
  return (
    <div className="">
      <Navbar />
      <Apresentacao />
      <Sobre />
      <CasosDeUsoSection />
      <PlanosSection />
      <FaqSection />
      <Contact />
    </div>
  )
}

