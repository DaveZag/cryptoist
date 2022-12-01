import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header limit">
      <div
        className="back-arrow"
        onClick={() => navigate('/')}
        aria-hidden="true"
      >
        <IoChevronBackSharp />
      </div>
      <p className="header-text">
        <Link to="/">Cryptoist</Link>
      </p>
      <p className="setting-icon">
        <CiSettings />
      </p>
    </div>
  );
};

export default Header;
