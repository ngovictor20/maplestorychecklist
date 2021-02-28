import React  from 'react';
import { deleteCharacter } from 'redux/stateSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

interface DialogProps {
    setDialogOpen: (arg: boolean) => void;
    setIsLoading: (arg: boolean) => void;
    setIsError: (arg: boolean) => void;
    setErrorMsg: (arg: string) => void;
}


const AddPictureDialog: React.FC<DialogProps> = ({ setDialogOpen, setIsLoading, setIsError, setErrorMsg }) => {
    const charIndex = useAppSelector(state => state.characterIndex);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col relative px-12 h-full content-center">
            <p className="text-2xl self-center text-center">
                Are you sure you want to delete this character?
            </p>
            <button onClick={() => {
                dispatch(deleteCharacter(charIndex));
            }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 cursor-pointer">
                Confirm
            </button>
        </div>
    )
}

export default AddPictureDialog
