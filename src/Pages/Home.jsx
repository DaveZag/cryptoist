import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uniqueId } from 'uuid';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import { fetchCoins } from '../Redux/Coins/coins';
import Coin from '../Components/Coin';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { coinsArray, loading } = useSelector((state) => state.coins);
  const [searchValue, setSearchValue] = useState('');
  const fetchState = useRef(true);
  const visible = true;

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

  return (
    <div className="home-container">
      {loading ? (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={visible}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
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
          <div className="coins-container">
            {coinsArray
              .filter((coin) => {
                if (searchValue === '') {
                  return coin;
                }
                if (
                  coin.name
                    .toLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
                ) {
                  return coin;
                }
                return null;
              })
              .map((coin) => (
                <div
                  key={uniqueId()}
                  aria-hidden="true"
                  onClick={() => handleClick(coin)}
                >
                  <Coin
                    coinId={coin.id}
                    image={coin.image}
                    name={coin.name}
                    currentPrice={coin.current_price}
                    priceChangePercentage24h={coin.price_change_percentage_24h}
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
