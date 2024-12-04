import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="React App" />
      <div className="container my-5">
        <TextForm heading="This is heading of text field" />
      </div>
      <About />
    </>
  );
}

export default App;
