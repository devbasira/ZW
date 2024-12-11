import "./App.css";
import AnimatedSection from "./components/AnimatedComponent";
import Experience from "./components/Experience";
import { Footer } from "./components/Footer";
import IntroComponent from "./components/IntroComponent";
import Sustenance from "./components/Sustenance";

function App() {
  return (
    <div className="">
      <AnimatedSection />
      <div className="bg-[#F3F3F3] w-screen z-10 bg-white flex flex-col  justify-center">
        <IntroComponent />
        <Experience />
        <Sustenance />
      </div>
      <Footer />
    </div>
  );
}

export default App;
