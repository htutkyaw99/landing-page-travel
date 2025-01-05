import Navbar from "./components/Navbar";
import CardContainer from "./sections/CardContainer";
import Footer from "./sections/Footer";
import Home from "./sections/Home";

const App = () => {
  return (
    <div className="bg-primary min-h-screen w-full text-font relative">
      <Home />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
