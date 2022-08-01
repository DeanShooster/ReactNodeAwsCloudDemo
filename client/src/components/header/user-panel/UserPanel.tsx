import { useContext } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../../../context/UserContext";

const UserPanel = ( props: {name: string} ) => {

    const navigate = useNavigate();
    const userInfo = useContext(userContext); 

    const openBucketHandler = () => navigate('/bucket', { state: props.name });

    const logoutHandler = () => {
        sessionStorage.clear();
        userInfo!.updateUser(null); // User Context
        navigate('/');
    }

    return (
        <div className="sign-in-up-panel-section">
            <div onClick={openBucketHandler}>Bucket</div>
            <div onClick={logoutHandler}>Logout</div>
        </div>
    );
};

export default UserPanel;