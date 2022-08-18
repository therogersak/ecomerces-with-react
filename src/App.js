import "./App.css";
import Banner from "./Components/Banner";
import Collection from "./Components/Collection";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Banner />
                <Collection />
              </>
            }
          />

          <Route
            path="/shop"
            element={
              <>
                <div className="flex items-center justify-between">
                  <Collection />
                </div>
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <h1>Error</h1>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
