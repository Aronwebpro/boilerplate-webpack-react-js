import React from 'react';
import { render } from 'react-dom';

const Root = () => {
    return (
        <div>
            <h1>Hello From React</h1>
            <p>Its working!!!!!!!!</p>
        </div>
    )
}


render(<Root />, document.getElementById('root'));