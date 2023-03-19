import React from 'react';
import {useState} from "react";
import styled, { css } from 'styled-components';
import { GrFormCheckmark, GrFormTrash } from 'react-icons/gr';
import cn from 'classnames';

const Remove = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #dee2e6;
font-size: 24px;
cursor: pointer;
display: none;
`;

const TodoItemBlock = styled.div`
display: flex;
align-items: center;
padding-top: 12px;
padding-bottom: 12px;
&:hover {
    ${Remove} {
        display: initial;
    }
}
`
const CheckMark = styled.div`
width: 32px;
height: 32px;


font-size: 24px;
display: flex;
align-items: center;
margin-right: 20px;
cursor: pointer;
`;

const Text = styled.div`
flex: 1;
font-size: 21px;
color: #495057;
cursor: pointer;

&.do--line {
    color: #D3D3D3;
    text-decoration-line: line-through;
}
`;


function TodoItem({ todo, onToggle, onRemove }) {
    const {id, text, done} = todo;

    return(
        <TodoItemBlock >
            <CheckMark>{done ? <GrFormCheckmark /> : null }</CheckMark>
            <Text className={ done ? "do--line" : null } done = {done} onClick={() => {onToggle(id)}}>{text}</Text>
            <Remove onClick={() => onRemove(id)}>
                 <GrFormTrash />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;