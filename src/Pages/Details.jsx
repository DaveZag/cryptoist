import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

import Loader from '../Components/Loader';
import { fetchDetails } from '../Redux/Details/details';

const Details = () => {
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const { coinDetails, loading } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchDetails(coinId));
  }, []);

  return (
    <div className="details-container limit">
      {loading ? (
        <Loader />
      ) : (
        <header className="Header">
          <img
            className="details-image"
            src={coinDetails.image.large}
            alt="crypto brand illustration"
          />
          <div className="details-container">
            <h2 className="details-header">{` ${coinDetails.name}`}</h2>

            <ul className="details-list">
              <li className="details-list-item flex">
                <h3>Symbol:</h3>
                <p>{`${coinDetails.symbol.toUpperCase()}`}</p>
              </li>
              {coinDetails.market_data.market_cap_rank ? (
                <li className="details-list-item flex">
                  <h3>Market Cap Rank:</h3>
                  <p>{`${coinDetails.market_data.market_cap_rank}`}</p>
                </li>
              ) : null}
              {coinDetails.genesis_date ? (
                <li className="details-list-item flex">
                  <h3>Creation Date:</h3>
                  <p>{coinDetails.genesis_date.toLocaleString()}</p>
                </li>
              ) : null}
              <li className="details-list-item flex">
                <h3>Current Price:</h3>
                <p>{`$ ${coinDetails.market_data.current_price.usd.toLocaleString()}`}</p>
              </li>
              <li className="details-list-item flex">
                <h3>Market Cap:</h3>
                <p>{`$ ${coinDetails.market_data.market_cap.usd.toLocaleString()}`}</p>
              </li>
            </ul>

            <p
              className="details-description"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coinDetails.description.en),
              }}
            />
          </div>
        </header>
      )}
    </div>
  );
};

export default Details;
