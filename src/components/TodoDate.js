import React from 'react';
import styled from 'styled-components';

const TodoDateBlock = styled.div`
display: flex;
margin: 0 auto;
h1 {
margin: 0;
font-size: 30px;
color: #696969;
}
`;

function TodoDate () {
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDate = now.getDate();
    
    return (
    <TodoDateBlock>
        <h1>{nowYear}년 {nowMonth}월 {nowDate}일</h1>
    </TodoDateBlock>
    );
}

export default TodoDate;