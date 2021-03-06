import React, { useState } from 'react'
import CharacterList from 'components/Character/CharacterList'
import useDialog from 'components/Dialog/useDialog';
import { DialogType } from 'components/Dialog/types';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    height: calc(100vh - 5rem);
`;

const Sidebar = () => {
    const { renderDialog, toggleDialog } = useDialog();
    return (
        <SidebarContainer className="border-r-2 border-accent-grey bottom-0 w-full left-0 relative shadow-xl">
            {renderDialog()}
            <div className="pt-6">
                <CharacterList />
            </div>
            <div onClick={() => { toggleDialog(DialogType.addCharacter) }} className="hover:bg-accent-grey hover:text-white absolute bottom-0 w-full h-14 text-center flex items-center justify-center">
                    <p>Add Character</p>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar
