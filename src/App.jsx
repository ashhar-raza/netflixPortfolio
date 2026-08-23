import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfileSelection from './pages/ProfileSelection';
import Recruiter from './pages/Recruiter';
import Developer from './pages/Developer';
import Stalker from './pages/Stalker';
import Adventurer from './pages/Adventurer';

export default function App() {
  return (
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
  );
}
