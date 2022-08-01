import { Fragment, useContext } from 'react';
import { Navigate } from 'react-router';
import { userContext } from '../../context/UserContext';

import './bucket.scss';
import CommercialSign from './commerical-sign/CommercialSign';

import Console from './console/Console';
import News from './news/News';
import UserBucket from './user-bucket/UserBucket';

const Bucket = () => {

    const userInfo = useContext(userContext);
    
    if( !(userInfo?.user) ) // Protected Route
        return <Navigate to="/" replace />

    return (
        <Fragment>
            <Console />
            <section className='bucket-container'>
                <News />
                <UserBucket />
            </section>
            <CommercialSign />
        </Fragment>
    );
};

export default Bucket;