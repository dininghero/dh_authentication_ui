import React from 'react';
import { render } from 'react-dom';

import Router from './components/Router';

const MOUNT_NODE = document.getElementById('app');

render(<Router />, MOUNT_NODE);
