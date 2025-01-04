import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

const App = () => {
  return (
    <div className="bg-primary min-h-screen w-full text-font">
      <Navbar />
      <Home />
      <Card />
    </div>
  );
};

export default App;
