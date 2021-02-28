import React, { useEffect, useState } from 'react'
import AddCharacterDialog from 'components/Dialog/AddCharacterDialog';
import ConfirmDeleteDialog from 'components/Dialog/ConfirmDeleteDialog';
import { DialogType } from 'components/Dialog/types';

interface DialogProps {
    setDialogOpen: (arg: boolean) => void;
    type: DialogType;
}


const BaseDialog: React.FC<DialogProps> = ({ setDialogOpen, type }) => {
    const [header, setHeader] = useState("Dialog");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        switch (type) {
            case DialogType.addCharacter:
                setHeader("Add Character");
                break;
            case DialogType.deleteCharacter:
                setHeader("Confirm");
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
                return <ConfirmDeleteDialog setDialogOpen={setDialogOpen} setIsError={setIsError} setErrorMsg={setErrorMsg} setIsLoading={setIsLoading} ></ConfirmDeleteDialog>
            default:
                break;
        }
    }

    return (
        <div className="fixed h-full w-screen z-50 inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center" >
            <span className="relative inset-0 flex flex-col bg-white w-1/2 max-h-1/2 rounded-lg">
                <p className="underline text-center h-18 text-2xl font-bold p-5">{header}</p>
                <img onClick={() => setDialogOpen(false)} src={`${process.env.PUBLIC_URL}/exit.svg`} className="absolute top-0 right-0 h-4 w-4 m-3 hover:bg-blue-200" alt="exit" />
                {renderContent()}
            </span>
        </div>
    )
}

export default BaseDialog
