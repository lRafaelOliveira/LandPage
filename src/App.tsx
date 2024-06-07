import VideoSection from './components/VideoSection/VideoSection';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import ValuesSection from './components/ValuesSection/ValuesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import WhatsAppLink from './components/WhatsAppLink/WhatsAppLink';
import Footer from './components/Footer/Footer';
import CasosDeUsoSection from './components/CasosDeUsoSection/CasosDeUsoSection';


export function App() {
  return (
    <div className="bg-gray-900 text-white">
      <VideoSection />
      <DescriptionSection />
      <ValuesSection />
      <CasosDeUsoSection />
      <TestimonialsSection />
      <FeaturesSection />
      <WhatsAppLink />
      <Footer />
    </div>
  )
}

