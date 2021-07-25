import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Result from "./pages/result/result.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <div className="header-app">
        <Header />
      </div>
      <div className="App">
        <Homepage />
        <Result />
      </div>
    </div>
  );
}

export default App;
