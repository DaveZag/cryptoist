import { ThreeCircles } from 'react-loader-spinner';

function Loader() {
  const visible = true;
  return (
    <div className="loader flex">
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
        ariaLabel="three-circles-rotating"
        outerCircleColor="white"
        innerCircleColor="white"
        middleCircleColor="white"
      />
    </div>
  );
}

export default Loader;
