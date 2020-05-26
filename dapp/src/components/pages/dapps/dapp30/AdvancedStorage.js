import React, { useState }from 'react';
import { Button, Badge, Form } from 'react-bootstrap';

import { drizzleReactHooks } from '@drizzle/react-plugin';

const AdvancedStorage = () => {
    const {
        useCacheCall,
        useCacheSend
    } = drizzleReactHooks.useDrizzle();
    const {send, TXObjects } = useCacheSend('AdvancedStorage', 'add');

    const [id, setID] = useState(0)
    const [idIdx, setIdIdx] = useState(0);

    const ids = useCacheCall('AdvancedStorage', 'getAll');
    const idsLength = String(Number(useCacheCall('AdvancedStorage', 'length'))-1);

    return (
        <>
        <Form onSubmit={
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                console.log(id);
                send(id);
            }
        }>

        <Form.Group controlId="advacedStorageData">
        <Form.Label>Enter an <i><b>integer</b></i> ID:</Form.Label>
        <Form.Control
        type="text"
        placeholder="ID"
        onChange={
            (event) => {
            if (event.target.value !== "") {
                setID(event.target.value)
            }}}
        />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>

        </Form>

        <hr />

        <small className="text-muted"><a href="https://github.com/facebook/react/issues/15074">*React sends value twice in a development environment.</a></small>

        <hr />

        <small className="text-muted">Transaction Status: </small>
        {TXObjects !== 0 &&
            TXObjects.map((TXObj, index) => {
                if (TXObj &&  TXObj.hasOwnProperty('status') && TXObj.status === 'pending') {
                    return <Badge key={index} variant="warning">{ TXObj.status }</Badge>;
                } else if (TXObj &&  TXObj.hasOwnProperty('status') && TXObj.status === 'success'){
                    return <Badge key={index} variant="success">{ TXObj.status }</Badge>;
                }
                return '';
            })
        }

        <hr />

        <span>
        <small className="text-muted">Stored IDs: </small>

        {ids &&
            ids.map(( idx, id ) => {
                return <Badge variant="primary" className="mx-1" key={id}> {idx} </Badge>
            })
        }
        </span>

        <hr />

        <Form>

        <Form.Group controlId="advacedStorageData">
        <Form.Label>Get <b>ID</b> by <b>Index</b>: 0 - {idsLength}</Form.Label>
        <Form.Control
        type="number"
        placeholder="0"
        min={0} max={ idsLength }
        onChange={(event) => {
            if (event.target.value !== "") {
                setIdIdx(event.target.value);
            }}}
        />
        </Form.Group>

        </Form>

        <b>ID:</b> <span>{useCacheCall('AdvancedStorage', 'get', idIdx)}</span>

        </>
    )
}

export default AdvancedStorage
