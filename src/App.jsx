import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import "./App.css";
import Navigation from "./components/NavigationBar";
import Home from './Pages/Home';
import LoginPage from './components/LoginPage';

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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Loading" element={<LoadingBar />} />
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;