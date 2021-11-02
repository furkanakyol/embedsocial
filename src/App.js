import Header from "./components/header";
import Corusel from "./components/corusel";
import FirstBenefits from "./components/FirstBenefits";
import SecondBenefits from "./components/SecondBenefits";
import "./assets/style.css";
import Integrations from "./components/Integrations";
import CTA from "./components/CTA";
import SocialProofVideo from "./components/SocialProofVideo";
import CTAandFooter from "./components/CTAandFooter";
function App() {
  return (
    <>
    <Header/>
    <Corusel/>
    <FirstBenefits/>
    <SecondBenefits/>
    <Integrations/>
    <CTA/>
    <SocialProofVideo/>
    <CTAandFooter/>
    </>
  );
}

export default App;
