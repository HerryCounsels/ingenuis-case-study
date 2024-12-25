import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Reports } from './pages/Reports';
import { Programs } from './pages/Programs';
import { ProgramDetails } from './pages/ProgramDetails';
import { Payment } from './pages/Payment';
import CourseStudio from './components/CourseStudio';
import Users from './components/Users';
import Upgrade from './components/Upgrade';
import Api from './components/Api';
import { Help } from './pages/Help';
import { Account } from './pages/Account';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background-secondary">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/reports" element={<Reports />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetails />} />
            <Route path="/course-studio" element={<CourseStudio />} />
            <Route path="/users" element={<Users />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/upgrade/payment/:plan" element={<Payment />} />
            <Route path="/api" element={<Api />} />
            <Route path="/help" element={<Help />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;