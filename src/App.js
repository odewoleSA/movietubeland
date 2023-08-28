import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from "./components/MoviePage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/movieland" exact element={<MoviePage />} />
          <Route path="/" exact element={<MoviePage />} />
        </Routes>
      </Router>
    </>
  );

};

export default App;
