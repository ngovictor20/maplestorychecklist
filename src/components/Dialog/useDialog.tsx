import React, { useState } from 'react';
import BaseDialog from 'components/Dialog/BaseDialog';
import { DialogType } from './types';


const useDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState<DialogType>(DialogType.deleteCharacter)
    const renderDialog = () => {
        return dialogOpen && <BaseDialog setDialogOpen={setDialogOpen} type={dialogType}></BaseDialog>
    }
    const toggleDialog = (type: DialogType)=>{
        setDialogOpen(!dialogOpen);
        setDialogType(type)
    }
    return (
        {
            toggleDialog, renderDialog
        }
    )
}

export default useDialog
