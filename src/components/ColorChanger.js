import React, {useState, useEffect} from 'react';
import styles from '../sass/ChangeColor.module.scss';
// import '../base/_color.scss';


const ColorChanger = () => {

    const [state, setState] = useState(false);
    const [color, setColor] = useState("#0095ff");

    const clickHandler = () =>  {
        setState(!state)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--app-color', `${color}`)
    }, [color]);

    return (
        <div className={`
            ${styles.container}
            ${state && styles.open}
            `}>
            <div className={styles.icon}>
                <svg onClick={() => clickHandler()} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </div>
            <div className={styles.palletContainer}>
                <div className={styles.pallet}>
                    <p>Unlimited Colors</p>
                    <ul className={styles.palletUl}>
                        <li onClick={() => setColor("#0095ff")}></li>
                        <li onClick={() => setColor("#c300ff")}></li>
                        <li onClick={() => setColor("#fc5f05")}></li>
                        <li onClick={() => setColor("#eeff00")}></li>
                        <li onClick={() => setColor("#04ff00")}></li>
                        <li onClick={() => setColor("#ff0000")}></li>
                        <li onClick={() => setColor("#393939")}></li>
                        <li onClick={() => setColor("#422c04")}></li>
                    </ul>
                    <p className={styles.button}>Magic Cursorv</p>
                    <span></span>
                    <ul className={styles.cursor}>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ColorChanger;