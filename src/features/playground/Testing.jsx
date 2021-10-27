import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

const Testing = () => {

    const data = useSelector(state => state.test.data);
    const dispatch = useDispatch();

   

    return (
        <div>
            <h1>The Data is: {data}</h1>

            <Button onClick={() => dispatch({type: 'INCREMENT'})} color='green' content='Increment' />
            <Button onClick={() => dispatch({type: 'DECREMENT'})} color='red' content='Decrement' />
        </div>
    )
}

export default Testing;
