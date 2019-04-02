import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const MOUNT_NODE = document.getElementById('app');

render(<App />, MOUNT_NODE);
