import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div onClick={() => navigate('/')} aria-hidden="true">
        <IoChevronBackSharp />
      </div>
      <p>Crypto currencies</p>
      <p>
        <CiSettings />
      </p>
    </div>
  );
};

export default Header;
