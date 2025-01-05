import Navbar from "./components/Navbar";
import CardContainer from "./sections/CardContainer";
import Home from "./sections/Home";

const App = () => {
  return (
    <div className="bg-primary min-h-screen w-full text-font">
      <Navbar />
      <Home />
      <CardContainer />
    </div>
  );
};

export default App;
