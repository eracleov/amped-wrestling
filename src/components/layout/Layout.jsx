import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
