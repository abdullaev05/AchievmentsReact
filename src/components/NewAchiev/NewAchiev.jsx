import React from 'react';
import NewAchievStyle from './NewAchievStyle';
import styled from 'styled-components';
import {AddBox} from 'styled-icons/material/AddBox';

const Input = styled.input`
font-size: 20px;
padding: 15px 15px 15px 40px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
margin-bottom: 30px;
outline: none;
width: 500px;
border: 1px;
`;

const InputWrapper = styled.div`
margin: auto;
`;
const AddAchievButton = styled.button`
background: none;
outline: none;
border: none;
font-size: 20px;
cursor: pointer;
&:hover {
    color: green;
};
`;

const NewAchiev = () => {
    return (
    <InputWrapper>
        <Input placeholder = 'Add new achiev'></Input>
        <AddAchievButton>Add</AddAchievButton>
    </InputWrapper>
    );
};

export default NewAchiev;