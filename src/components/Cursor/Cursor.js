import React,{useState, useEffect} from 'react';
import styles from './Cursor.module.scss';

const Cursor = () => {

    const [cords, setCords] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleWindowMouseMove = (event) => {
            setCords({
                x: event.clientX,
                y: event.clientY,
            })
        }
        window.addEventListener("mousemove", handleWindowMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        }
    }, [])

    let xc = cords.x - 25;
    let yc = cords.y - 25;

    return (
        <div className={styles.circle} style={{transform: `translate3d(${xc}px, ${yc}px, 0px)`}}></div>
    );
};

export default Cursor;
