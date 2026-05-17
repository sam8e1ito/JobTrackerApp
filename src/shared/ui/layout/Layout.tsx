import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
