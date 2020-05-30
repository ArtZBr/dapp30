import React from 'react';

import { drizzleReactHooks } from '@drizzle/react-plugin';

const Hello = () => {
    const {
        useCacheCall
    } = drizzleReactHooks.useDrizzle()
    return (
        <>
        { useCacheCall('HelloWorld', 'hello') }
        </>
    )
}

export default Hello 
