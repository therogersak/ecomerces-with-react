import "./App.css";
import Banner from "./Components/Banner";
import Collection from "./Components/Collection";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <Collection />
    </div>
  );
}

export default App;
