import './App.css';
import NavBar from "./components/NavBar";
import Section1 from './components/Section1';
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#121313]">
      
      <NavBar />
      <Section1 />
      <Section3 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
