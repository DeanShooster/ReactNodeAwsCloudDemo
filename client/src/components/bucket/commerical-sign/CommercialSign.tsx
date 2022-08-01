import { Fragment } from "react";

import Ticker from "react-ticker";

const CommercialSign = () => {

    const commercial = 'Training and Certification for developers '

    return (
        <section>
            <Ticker speed={3} mode={'smooth'}>
                {({ index }) => (
                <Fragment>
                    <h3>{commercial}<a href='' style={{color: '#232f3e'}}>Here</a></h3>
                </Fragment>)}
            </Ticker>
        </section>
    );
};

export default CommercialSign;