import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button, Card, Alert } from 'react-bootstrap';

import { drizzleReactHooks } from '@drizzle/react-plugin';

const Event = (props) => {
    const [show, setShow] = useState(true);
    const [txStatus, setTxStatus] = useState('windup');
    const [variant, setVariant] = useState('secondary');
    const [hash, setHash] = useState('0x0');

    setTimeout(() => setShow(false), 6000 );
    
    useEffect(() => {
        if(props.tx[0].status === 'success'){
            setTxStatus(props.tx[0].status);
            setVariant('success');
            setHash(props.tx[0].receipt.transactionHash)
        } else {
            setTxStatus(props.tx[0].status);
            setVariant('warning');
        }
    }, [props.tx])

    return (
        <>
        <Alert
            className="my-3"
            variant={variant}
            onClose={() => setShow(false)}
            show={show}
            dismissible>
          <Alert.Heading>Transaction</Alert.Heading>
          <p>
            Status: { txStatus }
          </p>
        {hash !== '0x0'
            ?
            <>
            <hr />
            <p>
            TX Hash: {hash}
            </p>
            </>
            :
            <br />
        }
        </Alert>
        </>
    )
}

const Create = () => {
    const {
        useCacheSend
    } = drizzleReactHooks.useDrizzle();
    const [name, setName] = useState('_bank_');
    const {send, TXObjects } = useCacheSend('Crud', 'create');

    return (
        <>
        <label>Enter a <i><b>String</b></i> Name:</label>
        <InputGroup>
        <FormControl
        type="text"
        placeholder="Name"
        aria-label="Name"
        onChange={
            (event) => {
                if (event.target.value !== "") {
                    setName(event.target.value)
                }}}
        />
        <InputGroup.Append>
        <Button
        variant="outline-primary"
        onClick={
            () => {
                send(name)
            }}>Send</Button>
        </InputGroup.Append>
        </InputGroup>

        {TXObjects && TXObjects[0] !== undefined &&
            <Event tx={
                TXObjects.map(tx => tx)
            } />
        }

        </>
    )
}

const Update = (props) => {
    const {
        useCacheSend
    } = drizzleReactHooks.useDrizzle();
    const { send, TXObjects } = useCacheSend('Crud', 'update');

    const [newName, setNewName] = useState('Update Name');


    return (
        <>
        <InputGroup>

        <InputGroup.Prepend>
        <InputGroup.Text>ID</InputGroup.Text>
        <InputGroup.Text >{props.id}</InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
        type="text"
        placeholder="New Name"
        aria-label="New Name"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
        />

        <InputGroup.Append>
        <Button
        variant="outline-primary"
        onClick={
            () => {
                send(props.id, newName);
            }}>Send</Button>
        </InputGroup.Append>

        </InputGroup>

        {TXObjects && TXObjects[0] !== undefined &&
            <Event tx={
                TXObjects.map(tx => tx)
            } />
        }

        </>
    )
}

const Delete = (props) => {
    const {
        useCacheSend,
    } = drizzleReactHooks.useDrizzle();
    const { send, TXObjects } = useCacheSend('Crud', 'destroy');
    
    return (
        <>
        <InputGroup>

        <InputGroup.Prepend>
        <InputGroup.Text>ID</InputGroup.Text>
        <InputGroup.Text> - {props.id} - </InputGroup.Text>
        </InputGroup.Prepend>

        <InputGroup.Append>
        <Button
        variant="outline-primary"
        onClick={
            () => {
                send(props.id);
            }}>Delete</Button>
        </InputGroup.Append>

        </InputGroup>
        
        {TXObjects && TXObjects[0] !== undefined &&
            <Event tx={
                TXObjects.map(tx => tx)
            } />
        }

        </>
    )
}

const Read = () => {
    const {
        useCacheCall
    } = drizzleReactHooks.useDrizzle();
    const nextId = useCacheCall('Crud', 'nextId');
    const [id, setId] = useState(1);
    const userName = useCacheCall([ 'Crud' ], call => call('Crud', 'read', id));
    return (
        <>
        <label>Enter a ID: <i><b>Integer</b></i></label>
        <InputGroup>
        <FormControl
        type="number"
        placeholder={`1 to ${nextId - 1}`}
        min={ 0 }
        max={ nextId ? nextId - 1 : 1 }
        onChange={ (event) => {
            if (event.target.value !== "") {
                setId(event.target.value)
            }}}
        />
        </InputGroup>

        <br />
        <b>Name:</b> {userName ? userName[1] : 'ID out of range'}

        <hr />
        <Card.Title id="update-anchor">-<b>U</b>pdate</Card.Title>
        <Update id={id} />

        <hr />
        <Card.Title>-<b>D</b>elete</Card.Title>
        <Delete id={id} />

        </>
    )
}

const Crud = () => {
    return (
        <>
        <hr />
        <Card.Title>-<b>C</b>reate</Card.Title>
        <Create />
        <hr />
        <Card.Title>-<b>R</b>ead</Card.Title>
        <Read />
        </>
    )
}

export default Crud;
