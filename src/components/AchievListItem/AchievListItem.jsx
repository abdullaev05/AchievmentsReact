import React from 'react';
import './AchievListItemStyle.jsx';
import styled from 'styled-components';
import {Trash} from 'styled-icons/boxicons-solid/Trash';
import {Edit} from 'styled-icons/boxicons-solid/Edit';


const Button = styled.button`
  background: none;
  border: none;
  max-width: 40px;
  width: auto;
  cursor: pointer;
  float: right;
`;
const TrashButton = styled(Trash);
const EditButton = styled(Edit);

const AchievListItem = ({ label }) => {

    return ( 
    <span>
        <span>{ label }</span>
      
        <Button>
            <Trash fill = 'tomato'/>
        </Button>
        <Button>
            <Edit fill = 'cornflowerblue'/>
        </Button>
    </span>
    );
}

export default AchievListItem;