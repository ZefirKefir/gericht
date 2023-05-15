import AboutUs from "./components/AboutUs";
import ChefsWord from "./components/ChefsWord";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import LandingMenu from "./components/LandingMenu";
import Laurels from "./components/Laurels";
import NewFlavour from "./components/NewFlavour";
import Video from "./components/Video";


function App() {
  return (
    <>
      <Header />
      <NewFlavour hasBg />
      <AboutUs />
      <LandingMenu hasBg />
      <ChefsWord />
      <Video />
      <Laurels />
      <Gallery hasBg />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
