import React, { useEffect, useState } from "react";
import AddCharacterDialog from "components/Dialog/AddCharacterDialog";
import { DialogType } from "components/Dialog/types";
import { deleteCharacter, resetChecklists } from "redux/stateSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import ConfirmDialog from "components/Dialog/ConfirmDialog";
import styled from "styled-components";

interface DialogProps {
  setDialogOpen: (arg: boolean) => void;
  type: DialogType;
}

const StyledDiv = styled.div`
  background-color: #2e9cd7;
`;

const BaseDialog: React.FC<DialogProps> = ({ setDialogOpen, type }) => {
  const [header, setHeader] = useState("Dialog");
  const charIndex = useAppSelector((state) => state.characterIndex);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (type) {
      case DialogType.addCharacter:
        setHeader("Add Character");
        break;
      case DialogType.deleteCharacter ||
        DialogType.deleteStorage ||
        DialogType.resetAllChecklists:
        setHeader("Confirm Action");
        break;
      default:
        break;
    }
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case DialogType.addCharacter:
        return <AddCharacterDialog setDialogOpen={setDialogOpen} />;
      case DialogType.deleteCharacter:
        return (
          <ConfirmDialog
            {...{
              confirmMessage: "Are you sure you want to delete this character?",
              setDialogOpen,
              onConfirm: () => {
                dispatch(deleteCharacter(charIndex));
                setDialogOpen(false);
              },
            }}
          ></ConfirmDialog>
        );
      case DialogType.deleteStorage:
        return (
          <ConfirmDialog
            {...{
              confirmMessage:
                "Are you sure you want to wipe your character data?",
              setDialogOpen,
              onConfirm: () => {
                localStorage.clear();
                setDialogOpen(false);
                window.location.reload();
              },
            }}
          />
        );
      case DialogType.informReset:
        return (
          <ConfirmDialog
            {...{
              confirmMessage: "Your checklists have been reset!",
              setDialogOpen,
              onConfirm: () => {
                setDialogOpen(false);
              },
            }}
          />
        );
      case DialogType.resetAllChecklists:
        return (
          <ConfirmDialog
            {...{
              confirmMessage:
                "Are you sure you want to reset all your checklists to the original list? This cannot be undone.",
              setDialogOpen,
              onConfirm: () => {
                dispatch(resetChecklists());
                setDialogOpen(false);
                window.location.reload();
              },
            }}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="fixed h-full w-screen z-50 inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center">
      <StyledDiv className="relative min-w-1/4 min-h-1/3 rounded-xl text-black">
        {renderContent()}
      </StyledDiv>
    </div>
  );
};

export default BaseDialog;
