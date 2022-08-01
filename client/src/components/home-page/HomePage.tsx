import { Fragment } from "react";

import './home-page.scss';

import Commercials from "./commercials/Commercials";
import ScreenCommercial from "./screen-commercial/ScreenCommercial";
import GlobalNetwork from "./global-network/GlobalNetwork";

const HomePage = () => {
    return (
        <Fragment>
            <ScreenCommercial />
            <Commercials />
            <GlobalNetwork />
        </Fragment>
    );
};

export default HomePage;