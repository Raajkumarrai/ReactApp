import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <TextForm heading="This is heading of text field" />
      </div>
    </>
  );
}

export default App;
