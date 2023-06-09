import React from 'react';
import styled from 'styled-components';
import TodoDate from './TodoDate';

const TodoHeadBlock = styled.div`
padding-top: 48px;
padding-left: 32px;
padding-right: 32px;
padding-bottom: 24px;
border-bottom: 1px solid #e9ecef;
`;

function TodoHead () {

    return(
        <TodoHeadBlock>
            <TodoDate />
        </TodoHeadBlock>
    );
}

export default TodoHead;