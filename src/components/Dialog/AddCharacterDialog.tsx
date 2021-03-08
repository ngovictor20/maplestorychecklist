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
    display: flex;
    position: relative;
    flex-direction: column; 
    width: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const AddPictureDialog: React.FC<DialogProps> = ({ setDialogOpen, setIsLoading, setIsError, setErrorMsg }) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState<Class>(Class.magician);
    const [level, setLevel] = useState(0);
    const dispatch = useAppDispatch();

    return (
        <StyledForm>
            <label className="block">
                <span>Name</span>
                <input type="text" maxLength={12} onChange={(e) => { setName(e.target!.value) }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
            </label>
            <label className="block">
                <span>Class</span>
                <select onChange={(e) => { setJob(Class[e.target!.value! as keyof typeof Class]) }} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {
                        Object.keys(Class).map((value) => {
                            return (<option>{value}</option>)
                        })
                    }
                </select>
            </label>
            <label className="block">
                <span>Level</span>
                <input type="number" max={300} min={0} onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 300 || value < 0) {
                        setLevel(0);
                    } else {
                        setLevel(value);
                    }
                    
                }} value={level} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <button onClick={() => {
                dispatch(addChar({ name, level, class: job }));
                setDialogOpen(false);
            }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5">
                Add
            </button>
        </StyledForm>
    )
}

export default AddPictureDialog
