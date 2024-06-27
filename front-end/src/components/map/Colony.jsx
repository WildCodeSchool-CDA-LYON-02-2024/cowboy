import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Colony = ({ id, x, y, level, resources }) => {
    const [style, api] = useSpring(() => ({ opacity: 0 }));

    React.useEffect(() => {
        api.start({ opacity: 1 });
    }, [api]);

    return (
        <animated.div
            className="colony"
            style={{
                ...style,
                position: 'absolute',
                top: y - 25, // Ajustement pour centrer la colonie sur la parcelle
                left: x - 25, // Ajustement pour centrer la colonie sur la parcelle
                width: 50,
                height: 50,
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff'
            }}
        >
            <div>
                <p>ID: {id}</p>
                <p>Niv: {level}</p>
                <p>Res: {resources}</p>
            </div>
        </animated.div>
    );
};

export default Colony;
