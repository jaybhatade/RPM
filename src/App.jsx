import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import "./App.css";
import LoginPage from "./components/LoginPage";
import Navigation from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  React.useEffect(() => {
    setProgress(100)
  }, [location])

  return (
    <div className="W-full min-h-screen bg-slate-900">
      <LoadingBar
        color="yellow"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navigation />
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Loading" element={<LoadingBar />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;