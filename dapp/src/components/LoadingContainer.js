import React from 'react';

import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Spinner } from 'react-bootstrap'

function LoadingComponent({children}) {
    const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
        drizzleStatus: drizzleState.drizzleStatus
    }))
    console.log(drizzleState);
    if(drizzleState.drizzleStatus.initialized === false) {
        return (
            <Spinner animation="border" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    return (
        <>
        {children}
        </>
    )
}

export default LoadingComponent;

