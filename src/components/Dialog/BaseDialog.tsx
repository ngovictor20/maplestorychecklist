import React, { useEffect, useState } from 'react'
import AddCharacterDialog from 'components/Dialog/AddCharacterDialog';
import { DialogType } from 'components/Dialog/types';
import { deleteCharacter } from 'redux/stateSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import ConfirmDialog from 'components/Dialog/ConfirmDialog';

interface DialogProps {
    setDialogOpen: (arg: boolean) => void;
    type: DialogType;
}


const BaseDialog: React.FC<DialogProps> = ({ setDialogOpen, type }) => {
    const [header, setHeader] = useState("Dialog");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const charIndex = useAppSelector(state => state.characterIndex);
    const dispatch = useAppDispatch();

    useEffect(() => {
        switch (type) {
            case DialogType.addCharacter:
                setHeader("Add Character");
                break;
            case DialogType.deleteCharacter | DialogType.deleteStorage:
                setHeader("Confirm Action");
                break;
            default:
                break;
        }
    }, [type])

    const renderContent = () => {
        switch (type) {
            case DialogType.addCharacter:
                return <AddCharacterDialog setDialogOpen={setDialogOpen} setIsError={setIsError} setErrorMsg={setErrorMsg} setIsLoading={setIsLoading} />
            case DialogType.deleteCharacter:
                return <ConfirmDialog {...{
                    confirmMessage: "Are you sure you want to delete this character?",
                    onConfirm: () => {
                        dispatch(deleteCharacter(charIndex));
                        setDialogOpen(false);
                    }
                }} ></ConfirmDialog>
            case DialogType.deleteStorage:
                return <ConfirmDialog {...{
                    confirmMessage: "Are you sure you want to wipe your character data?",
                    onConfirm: () => {
                        localStorage.clear();
                        setDialogOpen(false);
                        window.location.reload();
                    }
                }} ></ConfirmDialog>
            case DialogType.informReset:
                return <ConfirmDialog {...{
                    confirmMessage: "Your checklists have been reset!",
                    onConfirm: () => {
                        setDialogOpen(false);
                    }
                }} />
            default:
                break;
        }
    }

    return (
        <div className="fixed h-full w-screen z-50 inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center" >
            <span className="relative inset-0 flex flex-col bg-white max-w-1/2 min-w-1/4 max-h-full rounded-lg text-black">
                <p className="underline text-center h-18 text-2xl font-bold p-5">{header}</p>
                <img onClick={() => setDialogOpen(false)} src={`${process.env.PUBLIC_URL}/exit.svg`} className="absolute top-0 right-0 h-4 w-4 m-3 hover:bg-blue-200" alt="exit" />
                {renderContent()}
            </span>
        </div>
    )
}

export default BaseDialog
