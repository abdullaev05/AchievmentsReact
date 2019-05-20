import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../AppHeader';
import NewAchiev from '../NewAchiev';
import AchievList from '../AchievList';
import AchievListItem from '../AchievListItem';

import './AppStyle.jsx';
import styled from 'styled-components';

const Body = styled.body`
    text-align: center;
    background-color: rgb(217, 221, 243); 
`;
const App = () => {
    const achievData = [
        { label: 'breakfast', important: true, id: 1 },
        { label: 'lunch', important: false, id: 2 },
        { label: 'dinner', important: true, id: 3 }
    ];

    return(
        <div>
            <AppHeader />
            <NewAchiev />
            <AchievList achievs = {achievData} />
        </div>
    );
};

export default App;