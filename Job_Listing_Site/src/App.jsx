import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobLists";
import JobDetail from "./components/JobDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
