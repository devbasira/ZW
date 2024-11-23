import "./App.css";
import AnimatedSection from "./components/AnimatedComponent";
import IntroComponent from "./components/IntroComponent";

function App() {
  return (
    <div className="">
      <AnimatedSection />
      <div className="w-screen z-10 bg-white flex  justify-center">
      <IntroComponent />
      </div>
      
    </div>
  );
}

export default App;
