import { Fragment, useState } from "react";

import SignModal from "./sign-modal/SignModal";

const SignInUp = () => {

    const [sign,setSign] = useState<string | null>(null);

    const onLoginClickHandler = () => setSign('LOGIN');
    const onSignUpClickHandler = () => setSign('SIGNUP');
    const closeModal = () => setSign(null);

    return (
        <Fragment>
            <div className="sign-in-up-panel-section">
                <div onClick={onLoginClickHandler}>Sign In</div>
                <div onClick={onSignUpClickHandler}>Sign Up</div>
            </div>
            { sign && <SignModal title={sign} closeModal={closeModal} /> }
        </Fragment>
    );
};

export default SignInUp;