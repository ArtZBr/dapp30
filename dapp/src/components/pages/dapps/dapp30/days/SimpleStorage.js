import React, { useState }from 'react';
import { Button, Badge, Form } from 'react-bootstrap';

import { drizzleReactHooks } from '@drizzle/react-plugin';

const SimpleStorage = () => {
    const {
        useCacheCall,
        useCacheSend
    } = drizzleReactHooks.useDrizzle();

    const {send, TXObjects } = useCacheSend('SimpleStorage', 'set');
    const [rawData, setRawData] = useState('Hamburger');

    return (
        <>

        <Form onSubmit={(event) => {
            event.preventDefault();
            console.log('Submitting: ' + rawData);
            send(rawData);
        }}>

        <Form.Group controlId="simpleStorageData">
        <Form.Label>Enter <b>data</b> to store:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="SimpleStorage Data" 
        value={rawData}
        onChange={(event) => setRawData(event.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>

        </Form>

        <hr />
        <small className="text-muted">Transaction Status: </small>
        {TXObjects !== 0 &&
            TXObjects.map((TXObj, index) => {
                if (TXObj &&  TXObj.hasOwnProperty('status') && TXObj.status === 'pending') {
                    return <Badge key={index} variant="warning">{ TXObj.status }</Badge>
                } else if (TXObj &&  TXObj.hasOwnProperty('status') && TXObj.status === 'success'){
                    return <Badge key={index} variant="success">{ TXObj.status }</Badge>
                }
                return ''
            })
        }
        <hr />
        Current Stored Value: <Badge variant="primary">{ useCacheCall('SimpleStorage', 'get') }</Badge>
        </>
    )
}

export default SimpleStorage
