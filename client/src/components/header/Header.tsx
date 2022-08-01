import { useContext } from 'react';
import { userContext } from '../../context/UserContext';

import './header.scss';

import SignInUp from './sign-in-up/SignInUp';
import UserPanel from './user-panel/UserPanel';

const Header = () => {

    const userInfo = useContext< any >(userContext);

    return (
        <header>
            <h1>AWS User Cloud DEMO</h1>
            { !userInfo.user ? <SignInUp /> : <UserPanel name={userInfo.user.name}/> }
        </header>
    );
};

export default Header;