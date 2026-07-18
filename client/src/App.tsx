import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import Starfield from './components/ui/Starfield';
import CursorGlow from './components/ui/CursorGlow';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative" style={{ background: '#05050A', color: '#F0F0F8' }}>
        <Starfield />
        <CursorGlow />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectCaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
