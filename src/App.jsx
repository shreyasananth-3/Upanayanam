import './index.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
import { Family } from './sections/Family';
import { Schedule } from './sections/Schedule';
import { Venue } from './sections/Venue';
import { Footer } from './sections/Footer';

const CeremonyPage = lazy(() => import('./pages/CeremonyPage'));
const GayatriPage = lazy(() => import('./pages/GayatriPage'));

const PageFallback = () => <div className="min-h-screen bg-ivory" />;

function HomePage() {
  return (
    <div className="scroll-snap">
      <Hero />
      <Family />
      <Schedule />
      <Venue />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/ceremony"
          element={
            <Suspense fallback={<PageFallback />}>
              <CeremonyPage />
            </Suspense>
          }
        />
        <Route
          path="/gayatri"
          element={
            <Suspense fallback={<PageFallback />}>
              <GayatriPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
