import { Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingCTAButton } from './components/common/FloatingCTAButton';
import { PageTransition } from './components/layout/PageTransition';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-1">
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
      <FloatingCTAButton />
    </div>
  );
}

export default App;
