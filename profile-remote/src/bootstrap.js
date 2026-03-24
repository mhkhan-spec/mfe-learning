import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileCard from './components/ProfileCard.jsx';

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(ProfileCard));
