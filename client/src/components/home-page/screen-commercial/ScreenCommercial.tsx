import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';

import GlobalImg from '../../../assets/Global.png';
import DataImg from '../../../assets/Data.png';
import SecurityImg from '../../../assets/Security.png';

const ScreenCommercial = () => {

    const [currentCommercial,setCurrentCommercial] = useState<React.ReactNode | null>(null);
    const [currentIndex,setCurrentIndex] = useState<number>(0);
    
    const screens = [
        <Fragment>
            <div className="title">
                <h1>AWS Cloud WAN is Generally Available</h1>
                <p>One global network, one policy, one place to manage it all.</p>
            </div>
            <div className='img-container'>
                <img alt='global' src={GlobalImg}/>
            </div>
        </Fragment>,
        <Fragment>
            <div className="title">
                <h1>Expanded Databases</h1>
                <p>Start today for free trial on DB, Neptune, SQL, RDS and more.</p>
            </div>
            <div className='img-container'>
                <img alt='data' src={DataImg}/>
            </div>
        </Fragment>,
        <Fragment>
            <div className="title">
                <h1>Elevate Your Security in the Cloud</h1>
                <p>Find the resources you need to raise your security posture with AWS infrastructure and service.</p>
            </div>
            <div className='img-container'>
                <img alt='security' src={SecurityImg}/>
            </div>
        </Fragment>
    ];

    useEffect( ()=>{
        setCurrentCommercial(screens[0]);
    },[]);

    useLayoutEffect( ()=>{
        setTimeout(() => {
            if( currentIndex+1 === screens.length ){
                setCurrentCommercial(screens[0]);
                setCurrentIndex(0);
            } else{
                setCurrentCommercial(screens[currentIndex+1]);
                setCurrentIndex(currentIndex+1);
            }
        }, 3000);
    },[currentIndex,screens]);

    return (
        <section className="screen-commercial">
            {currentCommercial}
        </section>
    );
};

export default ScreenCommercial;