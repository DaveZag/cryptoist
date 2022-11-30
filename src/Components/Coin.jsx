import { PropTypes } from 'prop-types';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

// prettier-ignore
const Coin = ({
  image, name, currentPrice, priceChangePercentage24h,
}) => (
  <div className="Coin-card">
    <img src={image} alt="coin brand" />
    <p>{name}</p>
    {/* prettier-ignore */}
    <p>
      $
      {currentPrice}
    </p>
    {priceChangePercentage24h > 0 ? (
      <span className="coin-up">
        <FiArrowUpRight />
        {priceChangePercentage24h}
      </span>
    ) : (
      <span className="coin-down">
        <FiArrowDown />
        {priceChangePercentage24h}
      </span>
    )}
  </div>
);

Coin.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  priceChangePercentage24h: PropTypes.number.isRequired,
};

export default Coin;
