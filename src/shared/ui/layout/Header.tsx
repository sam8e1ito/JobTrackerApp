import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@/app/providers/useTheme';

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
      <header>
        <button onClick={toggleNavbar}>{isOpen ? 'Close' : 'Open'}</button>
        <nav style={{ display: isOpen ? 'flex' : 'none' }}>
          {navItems.map((item) => {
            return (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            );
          })}
          <button onClick={toggleTheme}>{theme === 'dark' ? 'Dark' : 'Light'}</button>
        </nav>
      </header>
    </>
  );
};
