import React from "react";
import CharacterList from "components/Character/CharacterList";
import useDialog from "components/Dialog/useDialog";
import { DialogType } from "components/Dialog/types";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: calc(100vh - 5rem);
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
`;

const Sidebar = () => {
  const { renderDialog, toggleDialog } = useDialog();
  return (
    <SidebarContainer className=" bottom-0 w-full left-0 relative shadow-xl flex flex-col items-center text-header-grey">
      {renderDialog()}
      <div className="pt-6 w-full">
        <CharacterList />
      </div>
      <div
        onClick={() => {
          toggleDialog(DialogType.addCharacter);
        }}
        className="hover:bg-accent-grey hover:text-white absolute bottom-2 w-4/5 h-14 text-center flex items-center justify-center cursor-pointer p-2 border-2 border-accent-grey rounded-md"
      >
        <p>Add Character</p>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
