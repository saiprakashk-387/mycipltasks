import React, { useState } from 'react';

const Trail = () => {
    const [state, setState] = useState('');

    const handler = (event) => {
        // which is pressed
        setState(event.key);
    };

    return (
        <div>         
            <p>Key pressed is: {state}</p>
            {/* Passing the key pressed to the handler function */}
            <input type="text" onKeyPress={(e) => handler(e)} />

        </div>
    );
};

export default Trail;
