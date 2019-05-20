import React from 'react';
import AchievListItem from '../AchievListItem';
import styled from 'styled-components';
import './AchievListStyle.jsx';

const List = styled.ul`
text-align: left;
font-size: 20px;
display: inline-block;
border: 1px;
outline: none;
list-style-type: none;
padding-left: 0;
`;
const ListItem = styled.li`
background-color: lavender;
padding 15px 15px 15px 40px;
font-size: 20px;
margin-top: 10px;
width: 550px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
height: 24px;
word-break: break-all;
`;
const AchievList = ({ achievs }) => {
    const elements = achievs.map((item) => {
        const { id, ...itemProps } = item;

        return (
       <ListItem key = {item.id}><AchievListItem {...itemProps}/></ListItem>
      );
    });

    return(
        <List>
           { elements }
        </List>
    );
};

export default AchievList;