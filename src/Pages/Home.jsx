import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uniqueId } from 'uuid';
import { useNavigate } from 'react-router-dom';

import Loader from '../Components/Loader';
import { fetchCoins } from '../Redux/Coins/coins';
import Coin from '../Components/Coin';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { coinsArray, loading } = useSelector((state) => state.coins);
  const [searchValue, setSearchValue] = useState('');
  const fetchState = useRef(true);

  useEffect(() => {
    if (fetchState.current) {
      fetchState.current = false;
      dispatch(fetchCoins());
    }
  }, []);

  const handleClick = (coin) => {
    if (coin.id !== undefined) {
      navigate(`details/${coin.id}`);
    }
  };

  // filter coins' array and return different results when a match is found or not
  const filteredCoins = coinsArray.filter((coin) => {
    if (searchValue === '') {
      return coin;
    }
    if (coin.name.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
      return coin;
    }
    return null;
  });

  // check the search value and return different values depending on it
  const checkQuery = () => {
    if (filteredCoins.length === 0) {
      return (
        <div className="error-message">
          <p>No match found...</p>
        </div>
      );
    }
    return filteredCoins.map((coin) => (
      <div
        key={uniqueId()}
        aria-hidden="true"
        onClick={() => handleClick(coin)}
        className="card-container "
      >
        <Coin
          coinId={coin.id}
          image={coin.image}
          name={coin.name}
          currentPrice={coin.current_price}
          priceChangePercentage24h={coin.price_change_percentage_24h}
        />
      </div>
    ));
  };

  return (
    <div className="home-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search a crypto..."
              className="search-input"
              value={searchValue}
            />
          </div>
          <div className="coins-container flex limit">{checkQuery()}</div>
        </>
      )}
    </div>
  );
};

export default Home;
