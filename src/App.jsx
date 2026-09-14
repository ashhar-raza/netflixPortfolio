import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ARIntro from './components/ARIntro';
import ProfileSelection from './pages/ProfileSelection';
import Recruiter from './pages/Recruiter';
import Developer from './pages/Developer';
import Stalker from './pages/Stalker';
import Adventurer from './pages/Adventurer';

export default function App() {
  // Show intro only on first load per browser session (not on navigation)
  const [showIntro, setShowIntro] = useState(() => {
    return !localStorage.getItem('ar_intro_shown');
  });

  useEffect(() => {
    if (showIntro) {
      // localStorage.setItem('ar_intro_shown', '1');
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <ARIntro onComplete={handleIntroComplete} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileSelection />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/stalker" element={<Stalker />} />
          <Route path="/adventurer" element={<Adventurer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
