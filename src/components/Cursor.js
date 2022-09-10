import React,{useState, useEffect} from 'react';
import styles from '../sass/Cursor.module.scss';

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


    // const [cords, setCords] = useState({x: 0, y: 0})

    // useEffect(() => {
    //     const handleWindowMouseMove = (event) => {
    //         setCords({
    //             x: event.screenX,
    //             y: event.screenY,
    //         })
    //     }
    //     window.addEventListener("mousemove", handleWindowMouseMove);
    //     return () => {
    //         window.removeEventListener('mousemove', handleWindowMouseMove);
    //     }
    // }, [])
    // const updateMouse = (e) => {
    //     cursorRef.current.style.top = `${e.y - SIZE / 2}px`
    //     cursorRef.current.style.left = `${e.x - SIZE / 2}px`
    //   }
        // <div>
        //     <div className='main-cursor' ref={mainCursor}></div>
        //     <div className='secondary-cursor' ref={secondaryCursor}></div>
        // </div>
        // <div className={styles.circle} c`}}>

        // // </div>
        // <div className={styles.circle} style={{top: `${cords.y}px`, left: `${cords.x}px`}}>

        // </div>
    //     <div
    //     ref={containerNodeRef}
    //     style={{
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       cursor: 'none'
    //     }}
    //   >
    //     <Cursor ref={cursorRef} />
    //     <h1>Hello CodeSandbox</h1>
    //     <h2>Start editing to see some magic happen!</h2>
    //   </div>
// document.on("click mousemove","body",function(e){ 
//     var x = e.clientX;
//     var y = e.clientY;
//     var newposX = x - 60;
//     var newposY = y - 60; (".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
//     });