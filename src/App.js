import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/** PAGES **/
import Homepage from './Pages/Homepage';
import Detector from './Pages/Detector';
import Finish from './Pages/Finish';

function App() {
  //APP NAME
  document.title = "MSERS";
  document.body.style = "background: #FFFFFF;";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/detector" element={<Detector/>}/>
          <Route path="/redirect" element={<Finish/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
