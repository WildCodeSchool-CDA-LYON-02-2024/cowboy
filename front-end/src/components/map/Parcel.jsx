import { useSpring, animated } from '@react-spring/web';

const Parcel = ({ id, src, onClick }) => {
  const [style, api] = useSpring(() => ({ scale: 1 }));
  console.log('source : ', src);

  const handleMouseEnter = () => {
    api.start({ scale: 1.05 });
  };

  const handleMouseLeave = () => {
    api.start({ scale: 1 });
  };

  return (
    <animated.div
      className='parcel'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
    >
      <img src={src} alt={`Parcel ${id}`} />
    </animated.div>
  );
};

export default Parcel;
