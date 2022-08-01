import './sign-modal.scss';

import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import { Fragment } from 'react';

const SignModal = ( props: {title : string, closeModal: Function}) => {

    const closeModalHandler = () =>  props.closeModal();

    return (
        <Fragment>
            <div className='sign-modal'>
                <div className='close-modal' onClick={closeModalHandler}>X</div>
                <h2>{props.title === 'LOGIN' ? 'Sign In' : 'Sign Up'}</h2>
                { props.title === 'LOGIN' ? <SignIn closeModal={closeModalHandler}/> : <SignUp closeModal={closeModalHandler}/> }
            </div>
            <div className='block-background'></div>
        </Fragment>
    );
};

export default SignModal;