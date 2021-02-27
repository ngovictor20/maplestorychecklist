import React, { useState } from 'react';
import styled from 'styled-components';
import { Class } from 'types';
import { addChar } from 'redux/stateSlice';
import { useAppDispatch } from 'redux/hooks';

interface DialogProps {
    setDialogOpen: (arg: boolean) => void;
    setIsLoading: (arg: boolean) => void;
    setIsError: (arg: boolean) => void;
    setErrorMsg: (arg: string) => void;
}

const StyledForm = styled.div`
    padding: 2rem 4rem 2rem 4rem;
    display: flex;
    position: relative;
    flex-direction: column; 
    width: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const StyledTextArea = styled.textarea`
    resize: vertical;
`;

const StyledSubmitButton = styled.button`

`;

const AddPictureDialog: React.FC<DialogProps> = ({ setDialogOpen, setIsLoading, setIsError, setErrorMsg }) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState<Class>(Class.magician);
    const [level, setLevel] = useState(0);
    const dispatch = useAppDispatch();

    return (
        <StyledForm>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" onChange={(e) => { setName(e.target!.value) }} ></input>
            <label htmlFor="class">Class</label>
            <input type="text" name="class" onChange={(e) => { setJob(Class[e.target!.value! as keyof typeof Class]) }} ></input>
            <label htmlFor="level">Level</label>
            <StyledTextArea name="level" onChange={(e) => { setLevel(parseInt(e.target!.value)) }} />
            <StyledSubmitButton onClick={() => {
                dispatch(addChar({ name, level, class: job }))
            }}>Add</StyledSubmitButton>
        </StyledForm>
    )
}

export default AddPictureDialog
