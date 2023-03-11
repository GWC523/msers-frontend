import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/** PAGES **/
import Homepage from './Pages/Homepage';


function App() {
  //APP NAME
  document.title = "MSERS";
  document.body.style = "background: #FFFFFF;";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
