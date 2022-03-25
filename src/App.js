import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
function App() {
  return (
    <div className="App">
      <div className="container-fluid px-0">
        <NavBar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
