import React, {Fragment} from 'react';
import Info from "./Info";

const NASAInfo = (props: any) => {
    return (
        <Info
            title="NASA Info"
            para1="NASA is the US space agency"
            para2="Not to be confused with NASCAR, which is a rubbish version of motor racing, but is also from the USA."
            imageURL="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
            imageAlt="NASA logo"
        />
    );
};

export default NASAInfo;