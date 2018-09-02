import React from 'react';
import { render} from 'react-dom';
import App from '../../src';

const DemoApp = () => (
    <App />
);

render(<DemoApp />, document.getElementById("root"));