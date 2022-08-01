import { useContext, useReducer, useState } from "react";
import { userContext } from "../../../../../context/UserContext";

import { SignInUpReducer } from "../../../../../reducer/SignInUpReducer";
import { UserSignIn } from "../../../../../api/UserApiRequests";

const SignIn = ( props: {closeModal: Function} ) => {

    const userInfo = useContext(userContext);
    const [formState,dispatchSignForm] = useReducer(SignInUpReducer,{
        values: { email: null, password: null, repeatedPassword: true },
        isFormValid: false
    });
    const [errorMsg,setErrorMsg] = useState<string | null>(null);

    const onSignInHandler = async ( event:any ) =>{
        event.preventDefault();
        if( !formState.isFormValid ) return;
        const credentials = { email: event.target[0].value, password: event.target[1].value};
        const data = await UserSignIn( credentials );
        if( data.token ){ // If for successfully logging as a user.
            sessionStorage.setItem('token',data.token);
            userInfo!.updateUser( {email: credentials.email, name: 'User'}); // User Context
            event.target.reset(); props.closeModal();
            return;
        }
        setErrorMsg( data.Message );
    }

    return (
        <form onSubmit={onSignInHandler}>
            <div>
                <label>E-Mail</label>
                <input type='email' autoComplete='new-password'
                    className={ formState.values.email || formState.values.email===null ? '' : 'error' }
                    onBlur={ (event) => { dispatchSignForm( { type: 'EMAIL', payload: event.target.value } ) } } />
            </div>
            { !(formState.values.email || formState.values.email===null) ? <span className="error-msg">Invalid Input Email.</span> : null }
            <div>
                <label>Password</label>
                <input type='password' autoComplete='new-password'
                    className={ formState.values.password || formState.values.password===null ? '' : 'error' }
                    onBlur={ (event) => { dispatchSignForm( { type: 'PASSWORD', payload: event.target.value } ) } }/>
            </div>
            { !(formState.values.password || formState.values.password===null) ? <span className="error-msg">Password is too Short.</span> : null }
            <button>Sign In</button>
            { errorMsg && <span className="error-msg">{errorMsg}</span>}
        </form>
    );
};

export default SignIn;