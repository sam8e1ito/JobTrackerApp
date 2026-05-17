import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__copyright">
          <span>&copy; {currentYear} Job Tracker.</span>
        </div>

        <div className="app-footer__links">
          <a
            href="https://github.com/sam8e1ito"
            target="_blank"
            rel="noreferrer"
            className="app-footer__link"
          >
            GitHub
          </a>
          <Link to="/privacy" className="app-footer__link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
