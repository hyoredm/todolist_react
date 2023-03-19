import {useState, useCallback} from "react";
import styled, {css} from 'styled-components';
import {FiPlus} from "react-icons/fi";

const InsertForm = styled.form`
background: #f8f9fa;
padding-left: 32px;
padding-top: 32px;
padding-right: 32px;
padding-bottom: 32px;

border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
border-top: 1px solid #e9ecef;

display: flex;
flex-direction: row;
`;

const Input = styled.input`
padding: 12px;
border-radius: 4px;
border: 1px solid #dee2e6;
width: 100%;
outline: none;
font-size: 18px;
box-sizing: border-box;
`;

const Button = styled.button`
background: #63e6be;
cursor: pointer;
border-radius: 50%;
width: 38px;
height: 38px;
font-size: 20px;
display: flex;
align-items: center;
align-content: center;
`

function TodoCreate({onInsert}) {
    const [value, setValue] = useState('');
    const onChange = useCallback(event => {
        setValue(event.target.value);
    }, [])
    const onSubmit = useCallback(
        event => {
            onInsert(value);
            setValue('');
            event.preventDefault();
        }
    ,[onInsert, value])
    
    return(
   
            <InsertForm onSubmit={onSubmit}>
                <Input
                onChange = {onChange}
                value={value}
                placeholder="할 일을 입력해주세요" />

                <Button>
                     <FiPlus />
                 </Button>
            </InsertForm>
   
    )
}

export default TodoCreate;