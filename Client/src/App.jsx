import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Personalised from './Components/Personalised';
import SchemeSearch from './Components/Services/SchemeSearch';
import SchemeList from './Components/Services/SchemeList';
import ApplicationStatus from './Components/Services/ApplicationStatus';
import EligibilityCheck from './Components/Services/EligibilityCheck';
import FreeDemo from './Components/FreeDemo';
import ScheduledPage from './Components/ScheduledPage';
import SignUp from './Components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Personalised />} />
            <Route path="/search" element={<SchemeSearch />} />
            <Route path="/schemes" element={<SchemeList />} />
            <Route path="/eligibility" element={<EligibilityCheck />} />
            <Route path="/status" element={<ApplicationStatus />} />
            <Route path="/free-demo" element={<FreeDemo />} />
            <Route path="/scheduled" element={<ScheduledPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
