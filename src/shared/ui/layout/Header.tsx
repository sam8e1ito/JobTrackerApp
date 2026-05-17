import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@/app/providers/useTheme';

const BurgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/requests', label: 'Requests' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <>
      <header className="mobile-header">
        <button onClick={toggleNavbar} className="burger-button">
          {isOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </header>

      <nav className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div>
          <h2 className="sidebar__brand">Job Tracker</h2>
        </div>

        <div className="sidebar__nav">
          {navItems.map((item) => {
            return (
              <Link key={item.to} to={item.to} className="sidebar__link">
                {item.label}
              </Link>
            );
          })}
        </div>

        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </>
  );
};
