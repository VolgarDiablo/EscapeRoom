import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./generics/Header/Header";
import Content from "./generics/Content/Content";
import Footer from "./generics/Footer/Footer";

function App() {
  return (
    <div className="App font-raleway">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
