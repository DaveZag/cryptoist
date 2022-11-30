import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';

import { fetchDetails } from '../Redux/Details/details';

const Details = () => {
  const { coinDetails, loading } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const visible = true;

  useEffect(() => {
    dispatch(fetchDetails(coinId));
  }, []);

  return (
    <div className="details-container">
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
        <header className="Header">
          <h1>{coinDetails.name}</h1>
        </header>
      )}
    </div>
  );
};

export default Details;
