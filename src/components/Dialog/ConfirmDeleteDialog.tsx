import React, { useState } from 'react';
import styled from 'styled-components';
import { Class } from 'types';
import { deleteCharacter } from 'redux/stateSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

interface DialogProps {
    setDialogOpen: (arg: boolean) => void;
    setIsLoading: (arg: boolean) => void;
    setIsError: (arg: boolean) => void;
    setErrorMsg: (arg: string) => void;
}

const StyledForm = styled.div`
    display: flex;
    position: relative;
    flex-direction: column; 
    width: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const AddPictureDialog: React.FC<DialogProps> = ({ setDialogOpen, setIsLoading, setIsError, setErrorMsg }) => {
    const charIndex = useAppSelector(state => state.characterIndex);
    const dispatch = useAppDispatch();

    return (
        <StyledForm>
            <h1>
                Are you sure you want to delete this character?
            </h1>
            <button onClick={() => {
                dispatch(deleteCharacter(charIndex));
            }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5">
                Confirm
            </button>
        </StyledForm>
    )
}

export default AddPictureDialog
