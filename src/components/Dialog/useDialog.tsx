import React, { useState } from 'react';
import BaseDialog from 'components/Dialog/BaseDialog';

const useDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const renderDialog = (type: string) => {
        return dialogOpen && <BaseDialog setDialogOpen={setDialogOpen} type={type}></BaseDialog>
    }

    return (
        {
            setDialogOpen, renderDialog
        }
    )
}

export default useDialog
