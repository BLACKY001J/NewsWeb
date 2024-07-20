import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const pageSize = 6;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
      <Navbar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
        
      />
      <div className="container my-3">
        <Routes>
          <Route exact path="/"  element={<News setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general"/>} />
          <Route exact path="/entertainment"  element={<News setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in"  category="entertainment"/>} />
          <Route exact path="/sports"  element={<News setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports"/>} />
          <Route exact path="/health"  element={<News setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health"/>} />
          <Route exact path="/science"  element={<News setProgress={setProgress} pageSize={pageSize} key="science" country="in" category="science"/>} />
          <Route exact path="/business"  element={<News setProgress={setProgress} pageSize={pageSize} key="business" country="in" category="business"/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;